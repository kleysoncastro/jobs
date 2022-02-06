import Mail from '../lib/Mail';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name, email, password,
    };

    await Mail.sendMail({
      from: 'Test de filas',
      to: 'mail@test.com',
      subject: 'testando filas com redis',
      html: 'corpo de email',
    });
    return res.json(user);
  },
};
