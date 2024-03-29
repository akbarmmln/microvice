const express = require('express');
const router = express.Router();
const fs = require('fs');
const location1 = (name = '') => name ? `api/v1/${name}` : 'api/v1';
const location2 = (name = '') => name ? `api/aol/${name}` : 'api/aol';
const location3 = (name = '') => name ? `api/loyalty/${name}` : 'api/loyalty';
const location4 = (name = '') => name ? `api/ecs/${name}` : 'api/ecs';
const logger = require('./config/logger');

/* SET CORS HEADERS FOR API */
router.all('/api/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
})

fs.readdirSync(location1())
    .forEach(file => {
        const path = `/${location1(file)}`;
        logger.debug('location1',path)
        router.use(path, require(`.${path}`));
    });

fs.readdirSync(location2())
    .forEach(file => {
        const path = `/${location2(file)}`;
        logger.debug('location2',path)
        router.use(path, require(`.${path}`));
    });

fs.readdirSync(location3())
    .forEach(file => {
        const path = `/${location3(file)}`;
        logger.debug('location3',path)
        router.use(path, require(`.${path}`));
    });

fs.readdirSync(location4())
    .forEach(file => {
        const path = `/${location4(file)}`;
        logger.debug('location4',path)
        router.use(path, require(`.${path}`));
    });
module.exports = router;