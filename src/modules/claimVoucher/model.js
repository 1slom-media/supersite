import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCLAIM,
    POSTCLAIM,
    PUTCLAIM,
    DELETECLAIM
} from "./query.js";

const GET = async ({claimVoucherId=0}) => {
    try {
        return await fetchAll(GETCLAIM, [claimVoucherId])
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({ name,PhoneNumber,Comment}) => {
    try {
      return await fetch(POSTCLAIM, [name,PhoneNumber,Comment]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({claimVoucherId},{ name='', PhoneNumber='',Comment=''}) => {
    try {
      return await fetch(PUTCLAIM, [claimVoucherId, name, PhoneNumber,Comment]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({claimVoucherId}) => {
    try {
      return await fetch(DELETECLAIM, [claimVoucherId]);
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