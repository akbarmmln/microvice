'use-strict';

const moment = require('moment');
const logger = require('./logger');

exports.dateFormat = async function(date, type){
    try{
        const newDate = await moment(date).format(type);
        return newDate;
    } catch (e){
        logger.error('error formating date', e.toString());
        throw e;
    }
}

exports.rupiahFormat = async function(rupiah, elit){
    try{
        const newRupiah = 'Rp' + rupiah.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `${elit}`)
        return newRupiah;
    } catch (e){
        logger.error('error formating rupiah', e.toString());
        throw e;
    }
}