"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Invalid email address' }),
    car: zod_1.z.string(),
    quantity: zod_1.z.number().positive().min(1),
    totalPrice: zod_1.z.number().positive(),
});
