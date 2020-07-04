const firebase = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

exports.fire = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://projectname-63209.firebaseio.com'
});