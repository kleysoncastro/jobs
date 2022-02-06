import Queue from 'bull';

import redisConfigs from '../../configs/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, redisConfigs),
  name: job.key,
  handle: job.handle,
}));

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find((queueObject) => queueObject.name === name);

    return queue.bull.add(data);
  },
  process() {
    this.queues.forEach((queueObject) => {
      queueObject.bull.process(queueObject.handle);
      queueObject.bull.on('failed', (job, err) => {
        console.log('Job failed', queueObject.key, job.data);
        console.log(err);
      });
    });
  },
};
