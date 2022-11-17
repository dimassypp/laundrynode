'use strict';
const {
  Model
} = require('sequelize');
const detail_transaksi = require('./detail_transaksi');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.detail_transaksi,{
        foreignKey : "id_transaksi",
        as : "detail_transaksi"
      }),
      this.belongsTo(models.admin,{
        foreignKey : "id_admin",
        as : "admin"
      }),
      this.belongsTo(models.member,{
        foreignKey : "id_member",
        as : "member"
      })
    }
  }
  transaksi.init({
    id_transaksi: DataTypes.INTEGER,
    id_member: DataTypes.INTEGER,
    tgl: DataTypes.DATE,
    tgl_bayar: DataTypes.DATE,
    id_admin: DataTypes.INTEGER,   
    status:{
      type: DataTypes.ENUM("Baru", "Proses","Selesai"),
      defaultValue: "Baru",
    },
    dibayar: {
      type: DataTypes.ENUM("Dibayar", "Belum Dibayar"),
      defaultValue: "Belum Dibayar",
    },
  },
  {
    sequelize,
    modelName: 'transaksi',
    tableName: 'transaksi',
  });
  return transaksi;
};