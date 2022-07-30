const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { firestore } = require('firebase-admin');
admin.initializeApp();

exports.removeExpiredDocuments = functions.pubsub.schedule('every 1 minutes').onRun(async (context) => {
  const db = admin.firestore();
  const now = firestore.Timestamp.now();
  const ts = firestore.Timestamp.fromMillis(now.toMillis() - 43200000);

  const snap = await db.collection('appointments').where('createdAt', '<', ts).get();
  let promises = [];
  snap.forEach((snap) => {
    promises.push(snap.ref.delete());
  });
  return Promise.all(promises);
});
