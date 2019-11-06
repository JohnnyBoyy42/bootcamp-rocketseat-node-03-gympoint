import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';
import Plain from '../app/models/Plain';
import databaseConfig from '../config/database';

const models = [User, Student, Plain];

class DataBase {
  constructor() {
    this.setUpModels();
  }

  setUpModels() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new DataBase();
