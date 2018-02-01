module.exports = app => {
  // postgres config
  app.set("PGUSER", process.env.PGUSER || "boomtowndb");
  app.set("PGPASSWORD", process.env.PGPASSWORD || "boomtowndb");
  app.set("PGDATABASE", process.env.PGDATABASE || "boomtowndb");
  app.set("PGHOST", process.env.PGHOST || "localhost");
  app.set("PGPORT", process.env.PGPORT || "5432");
  //graph ql config
  app.set("GQL_PORT", process.env.GQL_PORT || "3001");
  //expresscongfig
  app.set("PORT", process.env.PORT || "3001");
  //temporary json dev server
  app.set("JSON_PORT", "4000");

  app.set("FIREBASE_CONFIG", {
    apiKey: "AIzaSyDm5uJnwoK1L-Fe04lVVTgilv-93RDH1a0",
    authDomain: "boomtown-186f7.firebaseapp.com",
    databaseURL: "https://boomtown-186f7.firebaseio.com",
    projectId: "boomtown-186f7",
    storageBucket: "boomtown-186f7.appspot.com",
    messagingSenderId: "881938671949"
  });
};
