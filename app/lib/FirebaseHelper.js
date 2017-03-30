import theme from '../config/theme.js';
import * as firebase from 'firebase';

const firebaseContext = null;

module.exports = {
  getFirebase() {
    firebaseContext = firebaseContext || firebase.initializeApp(theme.firebaseConfig);
    return firebaseContext;
  },

  authFirebase() {
    firebaseContext.auth().signInAnonymously().catch(function(error) {
      console.log('failed firebase', error);
    });
  },

  getItemsRef() {
    return firebaseContext.database().ref('netflix/months');
  }
};
