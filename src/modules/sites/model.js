import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETSITES,POSTSITES,PUTSITES,DELETESITES
} from "./query.js";

const GET = async ({sitesId=0}) => {
    try {
        return await fetchAll(GETSITES, [sitesId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ title, link,Background}) => {
    try {
      return await fetch(POSTSITES, [title,link,Background]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({sitesId},{ title='', link='',Background=''}) => {
    try {
      return await fetch(PUTSITES, [sitesId, title, link,Background]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({sitesId}) => {
    try {
      return await fetch(DELETESITES, [sitesId]);
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