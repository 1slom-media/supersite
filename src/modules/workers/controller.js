import model from "./model.js";
import {InternalServerError} from '../../lib/error.js';

const GET = async (req, res) => {
    try {
      const workers = await model.GET(req.params);
      res.send(workers);
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const POST = async (req, res) => {
    try {
      const workers = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"workers upload",
        data:workers
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const workers = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"workers update",
        data:workers
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const workers = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"workers deleted",
        data:workers
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
  };
  

export default {
    GET,
    POST,
    PUT,
    DELETE
  };