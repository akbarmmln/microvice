'use strict';
const ibm = require('ibm-cos-sdk');
const settings = require('../setting');

const crypto = require('crypto');

// hashing and signing methods
exports.hash = async function (key, msg) {
    var hmac = crypto.createHmac('sha256', key);
    hmac.update(msg, 'utf8');
    return hmac.digest();
}

exports.hmacHex = async function (key, msg) {
    var hmac = crypto.createHmac('sha256', key);
    hmac.update(msg, 'utf8');
    return hmac.digest('hex');
}

exports.hashHex = async function (msg) {
    var hash = crypto.createHash('sha256');
    hash.update(msg);
    return hash.digest('hex');
}

// region is a wildcard value that takes the place of the AWS region value
// as COS doesn't use the same conventions for regions, this parameter can accept any string
exports.createSignatureKey = async function (key, datestamp, region, service) {
    let keyDate = await exports.hash(('AWS4' + key), datestamp);
    let keyString = await exports.hash(keyDate, region);
    let keyService = await exports.hash(keyString, service);
    let keySigning = await exports.hash(keyService, 'aws4_request');
    return keySigning;
}

exports.createHexSignatureKey = async function (key, datestamp, region, service) {
    let keyDate = await exports.hashHex(('AWS4' + key), datestamp);
    let keyString = await exports.hashHex(keyDate, region);
    let keyService = await exports.hashHex(keyString, service);
    let keySigning = await exports.hashHex(keyService, 'aws4_request');
    return keySigning;
}

exports.client = new ibm.S3(settings.oss);