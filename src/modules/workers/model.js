import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETWORKERS,
    POSTWORKERS,
    PUTWORKERS,
    DELETEWORKERS
} from "./query.js";

const GET = async ({WorkersId=0}) => {
    try {
        return await fetchAll(GETWORKERS, [WorkersId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ imageAvatar, WorkerName, WorkerPosition,WorkerName_Uz,WorkerName_En,WorkerPosition_Uz,WorkerPosition_En}) => {
    try {
      return await fetch(POSTWORKERS, [imageAvatar, WorkerName, WorkerPosition,WorkerName_Uz,WorkerName_En,WorkerPosition_Uz,WorkerPosition_En]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({WorkersId},{ imageAvatar='', WorkerName='', WorkerPosition='',WorkerName_Uz,WorkerName_En,WorkerPosition_Uz,WorkerPosition_En}) => {
    try {
      return await fetch(PUTWORKERS, [WorkersId, imageAvatar, WorkerName, WorkerPosition,WorkerName_Uz,WorkerName_En,WorkerPosition_Uz,WorkerPosition_En]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({WorkersId}) => {
    try {
      return await fetch(DELETEWORKERS, [WorkersId]);
    } catch (error) {
        console.log(error);
    }
};

export default {
    GET,
    POST,
    PUT,
    DELETE
};