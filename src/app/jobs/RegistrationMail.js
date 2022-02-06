import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: 'Test de filas',
      to: `${user.name} < ${user.email} >`,
      subject: 'testando filas com redis',
      html: `Ola ${user.name} esse é um teste de envio de email`,
    });
  },
};
