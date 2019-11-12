import Mail from '../../lib/Mail';

class AnswerHelpOrderMail {
  get key() {
    return 'AnswerHelpOrderMail';
  }

  async handle({ data }) {
    const { order } = data;

    await Mail.sendMail({
      to: `${order.student.name} <${order.student.email}>`,
      subject: `Resposta da questão [${order.question}]`,
      template: 'answerHelpOrder',
      context: {
        student: order.student.name,
        question: order.question,
        answer: order.answer,
      },
    });
  }
}

export default new AnswerHelpOrderMail();
