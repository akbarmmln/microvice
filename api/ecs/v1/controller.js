'use strict';
const Core = require('@alicloud/pop-core');
const rsMsg = require('../../../response/rs');
const logger = require('../../../config/logger');

exports.stopecs = async function(req, res){
  try{
    let arrayInstance = ['i-k1a0acs08ydqicbvd1j9', 'i-k1a0acs08ydqi8dt4xkx', 'i-k1a0acs08ydqi8dt4xky']
    for(let i=0; i<arrayInstance.length; i++){
      var client = new Core({
        accessKeyId: 'LTAI4FcLFYjQ8RxQTSoXnDh9',
        accessKeySecret: 'Bd3WsazpkxkntlMOcALrPEehWpzcY5',
        endpoint: 'https://ecs.ap-southeast-5.aliyuncs.com',
        apiVersion: '2014-05-26'
      });
      var params = {
        "RegionId": "ap-southeast-5",
        "InstanceId": arrayInstance[i]
      }
      var requestOption = {
        method: 'POST'
      };
      client.request('StopInstance', params, requestOption).then((result) => {
        logger.debug('sukses stop ecs', JSON.stringify(result));
      }, (ex) => {
        logger.error(ex)
      })
    }
    return res.status(200).json(rsMsg());
  }catch(e){
    return res.status(500).json(e.toString());
  }
}

exports.runecs = async function(req, res){
  try{
    let arrayInstance = ['i-k1a0acs08ydqicbvd1j9', 'i-k1a0acs08ydqi8dt4xkx', 'i-k1a0acs08ydqi8dt4xky']
    for(let i=0; i<arrayInstance.length; i++){
      var client = new Core({
        accessKeyId: 'LTAI4FcLFYjQ8RxQTSoXnDh9',
        accessKeySecret: 'Bd3WsazpkxkntlMOcALrPEehWpzcY5',
        endpoint: 'https://ecs.ap-southeast-5.aliyuncs.com',
        apiVersion: '2014-05-26'
      });
      var params = {
        "RegionId": "ap-southeast-5",
        "InstanceId": arrayInstance[i]
      }
      var requestOption = {
        method: 'POST'
      };
      client.request('StartInstance', params, requestOption).then((result) => {
        logger.debug('sukses run ecs', JSON.stringify(result));
      }, (ex) => {
        logger.error(ex)
      })
    }
    return res.status(200).json(rsMsg());
  }catch(e){
    return res.status(500).json(e.toString());
  }
}