"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createApp_1 = require("./createApp");
const app = (0, createApp_1.createApp)();
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
