const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

//delete all appointments at 12:00am
exports.clearAllAppointments = functions.pubsub.schedule('0 0 * * *').onRun(async (context) => {
  const db = admin.firestore();
  const snap = await db.collection('appointments').get();
  let promises = [];
  snap.forEach((snap) => {
    promises.push(snap.ref.delete());
  });
  return Promise.all(promises);
});
