import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCONTACT,
    POSTCONTACT,
    PUTCONTACT,
    DELETECONTACT
} from "./query.js";

const GET = async ({contactUsId=0}) => {
    try {
        return await fetchAll(GETCONTACT, [contactUsId])
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({ name,PhoneNumber,Comment}) => {
    try {
      return await fetch(POSTCONTACT, [name,PhoneNumber,Comment]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({contactUsId},{ name='', PhoneNumber='',Comment=''}) => {
    try {
      return await fetch(PUTCONTACT, [contactUsId, name, PhoneNumber,Comment]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({contactUsId}) => {
    try {
      return await fetch(DELETECONTACT, [contactUsId]);
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