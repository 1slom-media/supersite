import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETREVIEWS,
    POSTREVIEWS,
    PUTREVIEWS,
    DELETEREVIEWS
} from "./query.js";

const GET = async ({ReviewsId=0}) => {
    try {
        return await fetchAll(GETREVIEWS, [ReviewsId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({title, video}) => {
    try {
      return await fetch(POSTREVIEWS, [title,video]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({ReviewsId},{ title='', video=''}) => {
    try {
      return await fetch(PUTREVIEWS, [ReviewsId, title,video]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({ReviewsId}) => {
    try {
      return await fetch(DELETEREVIEWS, [ReviewsId]);
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