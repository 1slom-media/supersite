import model from "./model.js";

const GET = async (req, res) => {
    try {
      const sites = await model.GET(req.params);
      res.send(sites);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
    try {
      const sites = await model.POST(req.body);
      res.send(sites);
    } catch (error) {
      console.error(error);
    }
};

const PUT = async (req, res) => {
    try {
      const sites = await model.PUT(req.params,req.body);
      res.send(sites);
    } catch (error) {
      console.error(error);
    }
};

const DELETE = async (req, res) => {
    try {
      const sites = await model.DELETE(req.params);
      res.send(sites);
    } catch (error) {
      console.error(error);
    }
  };
  

export default {
    GET,
    POST,
    PUT,
    DELETE
  };