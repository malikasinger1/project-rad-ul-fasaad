import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

var serviceAccount = require('./serviceAccount.json');

var defaultApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rad-ul-fasaad.firebaseio.com"
});

const db = admin.firestore();
export default db;



let firebaseAdmin = admin;
let firebaseAdminDb = admin.database().ref('/')
let firebaseAdminAuth = admin.auth()
let firebaseAdminFirestore = admin.firestore()

export { firebaseAdmin, firebaseAdminAuth, firebaseAdminDb, firebaseAdminFirestore }
// var defaultApp = admin.initializeApp(functions.config().firebase);