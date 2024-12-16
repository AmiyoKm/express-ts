// filepath: /C:/Users/games/OneDrive/Desktop/Mern/express-ts/index.d.ts
import * as express from 'express-serve-static-core';

declare global {
    namespace Express {
        interface Request {
            customField?: string;
        }
    }
}