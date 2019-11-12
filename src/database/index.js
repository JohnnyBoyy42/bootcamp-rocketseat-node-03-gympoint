import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import Student from '../app/models/Student';
import Plain from '../app/models/Plain';
import Registration from '../app/models/Registration';
import File from '../app/models/File';
import HelpOrder from '../app/models/HelpOrder';
import Checkin from '../app/models/Checkin';

import databaseConfig from '../config/database';

const models = [User, Student, Plain, Registration, File, HelpOrder, Checkin];

class DataBase {
  constructor() {
    this.setUpModels();
    this.mongo();
  }

  setUpModels() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }
}

export default new DataBase();
