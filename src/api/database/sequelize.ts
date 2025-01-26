import { Sequelize } from 'sequelize'
import { database } from '../../../config/environment'

const { db, host, port, password, user } = database
const sequelize = new Sequelize(`mysql://${user}@${host}:${port}/${db}`, {
  password,
  dialect: 'mysql',
})

export default sequelize
