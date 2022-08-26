'use strict';

/**
 * tool-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tool-list.tool-list');
