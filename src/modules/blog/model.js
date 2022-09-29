import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETBLOG,
    POSTBLOG,
    PUTBLOG,
    DELETEBLOG
} from "./query.js";

const GET = async ({BlogId=0}) => {
    try {
        return await fetchAll(GETBLOG, [BlogId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ TitleRu,DescriptionRu,TitleEn,DescriptionEn,TitleUz,DescriptionUz}) => {
    try {
      return await fetch(POSTBLOG, [TitleRu,DescriptionRu,TitleEn,DescriptionEn,TitleUz,DescriptionUz]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({BlogId},{ TitleRu,DescriptionRu,TitleEn,DescriptionEn,TitleUz,DescriptionUz}) => {
    try {
      return await fetch(PUTBLOG, [BlogId, TitleRu,DescriptionRu,TitleEn,DescriptionEn,TitleUz,DescriptionUz]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({BlogId}) => {
    try {
      return await fetch(DELETEBLOG, [BlogId]);
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