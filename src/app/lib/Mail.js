// eslint-disable-next-line import/no-extraneous-dependencies
import nodemailer from 'nodemailer';

import mailConfig from '../../configs/mail';

export default nodemailer.createTransport(mailConfig);
