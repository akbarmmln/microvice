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
        endpoint: process.env.OSS_ENDPOINT,
        apiKeyId: process.env.OSS_API_KEY,
        ibmAuthEndpoint: process.env.OSS_AUTH_ENDPOINT,
        serviceInstanceId: process.env.OSS_INST_ID,
        bucked: process.env.OSS_BUCKET,
        region: process.env.OSS_REGION,
        hmac_accessKey: process.env.OSS_HMAC_ACCE_KEY,
        hmac_secretKey: process.env.OSS_HMAC_SEC_KEY
    },
    secret: process.env.SECRET,
    instagram: {
        clientId: '343667420209525',
        clientSecret: 'a878dbc756eff27ecac82a05ac6db36d'
    }
};