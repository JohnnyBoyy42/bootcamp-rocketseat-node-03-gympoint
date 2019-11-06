import Plain from '../models/Plain';

class PlainController {
  async store(req, res) {
    return res.json({ message: 'deu certo' });
  }
}

export default new PlainController();
