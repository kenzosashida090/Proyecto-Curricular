const catchAsync = require("../utilidades/catchAsync");
const AppError = require("../utilidades/catchAsync");
const cliente = require("../server");
const Ecg = require("../modelo/ecgModelo");

exports.crearGrafica = catchAsync(async (req, res, next) => {
  const { ecgDato, tiempo, id, comentario } = req.body;
  const nuevaGrafica = await Ecg.create({
    paciente: id,
    ecgDato,
    tiempo,
    comentario,
  });
  res.status(201).json({
    status: "exitoso",
    data: {
      nuevaGrafica,
    },
  });
});

exports.borrarGrafica = catchAsync(async (req, res, next) => {
  const doc = await Ecg.findByIdAndDelete(req.params.eID);
  if (!doc) {
    return next(new AppError("Ningun paciente se encontro con ese ID", 404));
  }
  res.status(202).json({
    status: "exitoso",
  });
});
