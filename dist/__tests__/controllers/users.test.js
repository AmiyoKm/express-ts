"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __mocks__1 = require("../../__mocks__");
const users_1 = require("../../controllers/users");
describe('getUsers', () => {
    it('should return all users', () => {
        (0, users_1.getUsers)(__mocks__1.mockRequest, __mocks__1.mockResponse);
        expect(__mocks__1.mockResponse.json).toHaveBeenCalledWith([]);
    });
});
