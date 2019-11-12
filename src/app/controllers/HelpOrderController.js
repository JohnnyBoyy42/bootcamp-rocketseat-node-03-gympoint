import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async index(req, res) {
    const orders = await HelpOrder.findAll({
      where: {
        answer_at: null,
      },
    });
    return res.json({ orders });
  }
}

export default new HelpOrderController();
