const express = require('express');
const router = express.Router();
const fs = require('fs');
const location = (name = '') => name ? `api/v1/${name}` : 'api/v1';
const location2 = (name = '') => name ? `api/aol/v1/${name}` : 'api/aol/v1';
const location3 = (name = '') => name ? `api/loyalty/v1/${name}` : 'api/loyalty/v1';
const logger = require('./config/logger');

/* SET CORS HEADERS FOR API */
router.all('/api/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
})

fs.readdirSync(location())
    .forEach(file => {
        const path = `/${location(file)}`;
        logger.debug('asasas',path)
        router.use(path, require(`.${path}`));
    });

fs.readdirSync(location2())
    .forEach(file => {
        const path = `/${location2(file)}`;
        logger.debug('asasas',path)
        router.use(path, require(`.${path}`));
    });

fs.readdirSync(location3())
    .forEach(file => {
        const path = `/${location3(file)}`;
        logger.debug('asasas',path)
        router.use(path, require(`.${path}`));
    });

module.exports = router;