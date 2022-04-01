const router = require('express').Router();
const { karyawan } = require('../controllers');

router.get('/karyawan', karyawan.getDataKaryawan);

router.get('/karyawan/:id', karyawan.getDataKaryawanByID);

router.post('/karyawan/add', karyawan.addDataKaryawan);

router.patch('/karyawan/edit', karyawan.editDataKaryawan);

router.delete('/karyawan/:id', karyawan.deleteDataKaryawan);

module.exports = router;