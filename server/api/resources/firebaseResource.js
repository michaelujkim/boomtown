const firebase = require("firebase");
require("firebase/auth");

module.exports = app => {
  const firebaseApp = firebase.initializeApp(app.get("FIREBASE_CONFIG"));
  const db = firebaseApp.database();
  const auth = firebaseApp.auth();
  return {
    async getUsers() {
      let users = await db.ref("users").once("value");
      users = users.val();

      const userList = [];
      Object.keys(users.val(), userid => {
        userList.push({
          id: userid,
          email: users[userid].email,
          fullname: users[userid].fullname,
          imageurl: ""
        });
      });
      return userList;
    },

    async getUser(userid) {
      let user = await db.ref(`users/${userid}`).once("value");
      user = user.val();
      return {
        id: userid,
        ...user
      };
    }
  };
};
