import model from "./model.js";
import {InternalServerError} from '../../lib/error.js';

const GET = async (req, res) => {
    try {
      const sites = await model.GET(req.params);
      res.send(sites);
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const POST = async (req, res) => {
    try {
      const sites = await model.POST(req.body);
      res.status(201).json({
        status:201,
        message:"sites upload",
        data:sites
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const sites = await model.PUT(req.params,req.body);
      res.status(202).json({
        status:202,
        message:"sites update",
        data:sites
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const sites = await model.DELETE(req.params);
      res.status(202).json({
        status:204,
        message:"sites deleted",
        data:sites
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