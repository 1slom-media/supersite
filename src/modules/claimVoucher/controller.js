import model from "./model.js";
import {InternalServerError} from '../../lib/error.js';

const GET = async (req, res) => {
    try {
      const claimVoucher = await model.GET(req.params);
      res.send(claimVoucher);
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const POST = async (req, res) => {
    try {
      const claimVoucher = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"claimVoucher upload",
        data:claimVoucher
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const claimVoucher = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"claimVoucher update",
        data:claimVoucher
      })
    } catch (error) {
      return new InternalServerError (500,error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const claimVoucher = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"claimVoucher deleted",
        data:claimVoucher
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