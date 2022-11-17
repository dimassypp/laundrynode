'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaksi', {
      id_transaksi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_member: {
        type: Sequelize.INTEGER,
        references: {model: 'member', key: 'id_member'}
      },
      tgl: {
        type: Sequelize.DATE
      },
      batas_waktu: {
        type: Sequelize.DATE
      },
      tgl_bayar: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM("Baru", "Proses","Selesai"),
        defaultValue: "Baru",
      },
      dibayar: {
        type: Sequelize.ENUM("Dibayar","Belum Dibayar"),
        defaultValue: "Belum Dibayar",
      },
      id_admin: {
        type: Sequelize.INTEGER,
        references: {model: 'admin', key: 'id_admin'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transaksi');
  }
};