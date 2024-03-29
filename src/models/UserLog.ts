import {
  DECIMAL,
  Model, STRING, DATE, INTEGER,
} from 'sequelize';
import db from '.';

class UserLog extends Model {}

UserLog.init(
  {
    id: { type: INTEGER, primaryKey: true },
    userId: { type: INTEGER, allowNull: false, field: 'user_id' },
    assetId: { type: INTEGER, allowNull: false, field: 'asset_id' },
    type: { type: STRING, allowNull: false },
    log: { type: DATE, allowNull: false },
    quantity: { type: INTEGER, allowNull: false },
    price: { type: DECIMAL, allowNull: false },
  },
  {
    sequelize: db,
    modelName: 'User_Log',
    timestamps: false,
  },
);

export default UserLog;
