import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';
import Plain from '../app/models/Plain';
import Registration from '../app/models/Registration';
import databaseConfig from '../config/database';

const models = [User, Student, Plain, Registration];

class DataBase {
  constructor() {
    this.setUpModels();
  }

  setUpModels() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();
