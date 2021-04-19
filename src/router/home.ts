import { Request,Response } from 'express';

export function home(request:Request, response:Response){
  return response.json({"message": "Hello world"});
}