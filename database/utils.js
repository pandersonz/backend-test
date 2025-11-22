const { conexion } = require("./conexion.js");

const runQuery = (query, arrayValue = []) => {
  return new Promise((resolve, reject) => {
    conexion.query(query, arrayValue, (err, rows) => {
      if (err) return reject(err);
      resolve(JSON.parse(JSON.stringify(rows)));
    });
  });
};

module.exports = {
  runQuery,
};
