import model from "./model.js";
import {InternalServerError} from '../../lib/error.js';

const GET = async (req, res) => {
    try {
      const blog = await model.GET(req.params);
      res.send(blog);
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const POST = async (req, res) => {
    try {
      const blog = await model.POST(req.body);
      res.status(201).json({
        status:201,
        message:"blog upload",
        data:blog
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const blog = await model.PUT(req.params,req.body);
      res.status(202).json({
        status:202,
        message:"blog update",
        data:blog
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const blog = await model.DELETE(req.params);
      res.status(202).json({
        status:204,
        message:"blog deleted",
        data:blog
      })
    } catch (error) {
      return next(new InternalServerError (500,error.message))
    }
  };
  

export default {
    GET,
    POST,
    PUT,
    DELETE
  };