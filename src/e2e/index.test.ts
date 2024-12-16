import request from 'supertest';
import { createApp } from '../createApp';
import {type Express} from 'express-serve-static-core';
describe('/api/v1/users',()=> {
    let app : Express;

    beforeAll(()=>{
        app = createApp();
    })

    it('should return an empty array when getting , GET /api/v1/users',async()=>{
        const response = await request(app).get('/api/v1/users');
        expect(response.body).toEqual([]);
    })
})