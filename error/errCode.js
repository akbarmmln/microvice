const errCode = {
    '10000': 'internal server error',
    '10001': 'user already registered',
    '10002': 'user not found',
    '10003': 'failed to send sms',
    '10004': 'pin is not valid',
    '10005': 'missing parameter mobile number',
    '10006': 'missing parameter pin',
    '10007': 'missing parameter room id',
    '10008': 'missing parameter tanggal pencarian',
    '10009': 'data not found',
    '10010': `data booking has been confirmed, cancel can't be done`,
    '10011': `data booking has been confirmed, changing can't be done`,
    '10012': `username and password not match`,
    '10013': `send mail failed`
  };
  
  module.exports = errCode;