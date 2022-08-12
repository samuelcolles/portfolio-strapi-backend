'use strict';
const {nanoid} = require('nanoid');

/**
 *  correspondence controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::correspondence.correspondence',({strapi})=>({
  async create(ctx){
    ctx.request.body.data = {
      ...ctx.request.body.data,
      uid: nanoid(),
    };
    const response = await super.create(ctx);
    return response;
  }
}));
