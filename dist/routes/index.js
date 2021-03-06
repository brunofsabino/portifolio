"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController = __importStar(require("../controllers/homeController"));
const quantosDeVcExiste = __importStar(require("../controllers/quantosVcExisteController"));
const qualValorVeiculo = __importStar(require("../controllers/qualValorVeiculoController"));
const router = (0, express_1.Router)();
router.get('/', homeController.home);
router.get('/quantos-de-vc-existe', quantosDeVcExiste.index);
router.post('/quantos-de-vc-existe', quantosDeVcExiste.home);
router.get('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.home);
// router.post('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.searchVeiculos)
router.post('/qual-o-valor-do-seu-veiculo/veiculo', qualValorVeiculo.vehicle);
router.post('/qual-o-valor-do-seu-veiculo/veiculo/marca', qualValorVeiculo.brand);
router.post('/qual-o-valor-do-seu-veiculo/veiculo/marca/modelo', qualValorVeiculo.model);
router.post('/qual-o-valor-do-seu-veiculo/veiculo/marca/modelo/ano', qualValorVeiculo.year);
// router.post('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.searchVeiculos)
exports.default = router;
