"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const car_route_1 = require("./app/modules/car/car.route");
const order_route_1 = require("./app/modules/order/order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
//Car routes
app.use('/api', car_route_1.CarRoutes);
//Order routes
app.use('/api', order_route_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send('Hello from L2-Assignment-2!');
});
exports.default = app;
