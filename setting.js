if(process.env.ENVIRONMENT === 'development') {
    require('dotenv').config();
}
module.exports = {
    mysql: {
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        hostname: process.env.MYSQL_HOSTNAME,
        port: process.env.MYSQL_PORT,
        dbname: process.env.MYSQL_DB_NAME,
    },
    // mq: {
    //     protocol: 'amqp',
    //     hostname: process.env.MQ_HOSTNAME,
    //     port: process.env.MQ_PORT,
    //     username: process.env.MQ_USERNAME,
    //     password: process.env.MQ_PASSWORD,
    // },
    oss: {
        endpoint: process.env.endpoint,
        apiKeyId: process.env.apiKeyId,
        ibmAuthEndpoint: process.env.ibmAuthEndpoint,
        serviceInstanceId: process.env.serviceInstanceId,
        bucked: process.env.bucket,
        region: process.env.region,
        hmac_accessKey: process.env.hmac_accessKey,
        hmac_secretKey: process.env.hmac_secretKey
    },
    secret: process.env.SECRET,
};