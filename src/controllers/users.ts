import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";
declare module "express-serve-static-core" {
    interface Request {
        customField?: String;
    }
  }

export const getUsers = async (req : Request,res : Response) => {
    res.json([])
}

export const getUserById = async (req : Request,res : Response) => {
    res.send("Get user by id")
}

export const createUser = async (req : Request<{
    id: string
},{},CreateUserDto , CreateUserQueryParams >,res : Response<User>) => {
    req.body.email = 'amiyo@gmail.com'
    req.query.loginAfterCreate = true
    req.params.id = '123'
    req.customField ='customField'
    req.session
   
    res.json({ 
        id : 1,
        username : req.body.username,
        email : req.body.email
    })
    
}