"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const car_model_1 = require("./car.model");
const createCarIntoDB = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.create(car);
    return result;
});
const getAllCarsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.find();
    return result;
});
const getACarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.findById(id);
    return result;
});
exports.CarService = {
    createCarIntoDB,
    getAllCarsFromDB,
    getACarFromDB,
};
