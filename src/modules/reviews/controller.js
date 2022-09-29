import model from "./model.js";
import {InternalServerError} from '../../lib/error.js';

const GET = async (req, res) => {
    try {
      const reviews = await model.GET(req.params);
      res.send(reviews);
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const POST = async (req, res) => {
    try {
      const reviews = await model.POST(req.body);
      res.status(201).json({
        status:201,
        message:"reviews upload",
        data:reviews
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const reviews = await model.PUT(req.params,req.body);
      res.status(202).json({
        status:202,
        message:"reviews update",
        data:reviews
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const reviews = await model.DELETE(req.params);
      res.status(202).json({
        status:204,
        message:"reviews deleted",
        data:reviews
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