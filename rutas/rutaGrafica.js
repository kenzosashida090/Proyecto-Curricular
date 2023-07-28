const express = require("express");
const { getHola } = require("../controlador/controladorUsuario");
const {
  crearGrafica,
  borrarGrafica,
} = require("../controlador/controladorGrafica");
const { proteger } = require("../controlador/controladorAut");

const router = express.Router();

//router.post("/usuario", controladorUsuario.crearUsuario);
router.post("/crear-grafica", proteger, crearGrafica);
router.delete("/borrar-grafica/:eID", proteger, borrarGrafica);
module.exports = router;
