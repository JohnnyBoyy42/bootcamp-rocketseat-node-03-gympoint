import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class NewRegistrationMail {
  get key() {
    return 'NewRegistrationMail';
  }

  async handle({ data }) {
    const { registrationMail } = data;

    await Mail.sendMail({
      to: `${registrationMail.name} <${registrationMail.email}>`,
      subject: 'Email de boas vindas',
      template: 'newRegistration',
      context: {
        student: registrationMail.name,
        plan: registrationMail.title,
        start_date: format(
          parseISO(registrationMail.start_date),
          "'dia' dd 'de' MMMM' de 'yyyy'",
          {
            locale: pt,
          }
        ),
        end_date: format(
          parseISO(registrationMail.end_date),
          "'dia' dd 'de' MMMM' de 'yyyy'",
          {
            locale: pt,
          }
        ),
        price: registrationMail.pricePerMonth.replace('.', ','),
      },
    });
  }
}

export default new NewRegistrationMail();
