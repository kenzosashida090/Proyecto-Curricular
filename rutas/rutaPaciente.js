const express = require("express");
const controladorUsuario = require("../controlador/controladorUsuario");
const { proteger, activo } = require("../controlador/controladorAut");
const {
  crearPaciente,
  getPaciente,
  borrarPaciente,
  pacienteId,
} = require("../controlador/controladorPaciente");

const router = express.Router();
//router.post("/usuario", controladorUsuario.crearUsuario);
router.use(activo);
router.route("/").get(proteger, getPaciente);
router.post("/registro-paciente", proteger, crearPaciente);
router.route("/:pID").get(proteger, pacienteId);
router.delete("/borrar-paciente/:pID", proteger, borrarPaciente);
module.exports = router;
