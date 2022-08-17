import {Request, Response} from "express";

module.exports = {
    async index(req: Request, res:Response) {
        return res.json(
            [
                {"message" : "Username Already Exists"},
                {"message" : "Username Already Exists"},
                {"message" : "Username Already Exists"},
                {"message" : "Username Already Exists"}
            ])
    },
}
