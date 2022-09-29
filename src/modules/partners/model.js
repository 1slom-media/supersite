import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETPARTNERS,POSTPARTNERS,PUTPARTNERS,DELETEPARTNERS
} from "./query.js";

const GET = async ({partnersId=0}) => {
    try {
        return await fetchAll(GETPARTNERS, [partnersId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ LogoImage}) => {
    try {
      return await fetch(POSTPARTNERS, [LogoImage]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({partnersId},{ LogoImage=''}) => {
    try {
      return await fetch(PUTPARTNERS, [partnersId, LogoImage,]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({partnersId}) => {
    try {
      return await fetch(DELETEPARTNERS, [partnersId]);
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