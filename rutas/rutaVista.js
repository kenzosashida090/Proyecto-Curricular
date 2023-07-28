const express = require("express");

const {
  getIniciarSesion,
  getTabla,
  getRegistrar,
  getPaciente,
  getEcg,
  getGrafica,
} = require("../controlador/controladorVista");
const { proteger, activo } = require("../controlador/controladorAut");
const router = express.Router();

router.use(activo);
router.get("/", getIniciarSesion);
router.get("/registrar", getRegistrar);
router.get("/paciente", proteger, getTabla);
router.get("/paciente/:pID", proteger, getPaciente);
router.get("/graficas-paciente/:pID", proteger, getEcg);
router.get("/graficas-paciente/:pID/:eID", proteger, getGrafica);
module.exports = router;
