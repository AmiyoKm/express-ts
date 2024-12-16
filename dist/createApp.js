"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const users_route_1 = __importDefault(require("./routes/users.route"));
function createApp() {
    const app = (0, express_1.default)();
    const PORT = 4000;
    app.use(express_1.default.json());
    app.use('/api/v1/users', users_route_1.default);
    return app;
}
