const connection = require("./connection");

const orm = {
  selectAll: function(tableName) {
    const query = "SELECT * FROM ??";
    connection.query(query, [tableName], (error, result) => {
      if (error) throw error;

      console.log(result);
    });
  },
  selectColumn: function(columnName, tableName) {
    const query = "SELECT ?? FROM ??";
    connection.query(query, [columnName, tableName], (error, result) => {
      if (error) throw error;

      console.log(result);
    });
  },
  selectWhere: function(columnName, tableName, valueToMatch) {
    const query = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(
      query,
      [tableName, columnName, valueToMatch],
      (error, result) => {
        if (error) throw error;

        console.log(result);
      }
    );
  },
  selectJoin: function(columns, firstTable, secondTable, origin, foreign) {
    const query =
      "SELECT ? FROM ?? as tOne LEFT JOIN ?? as tTwo ON tOne.? = tTwo.?";
    connection.query(
      query,
      [columns, firstTable, secondTable, origin, foreign],
      (error, result) => {
        if (error) throw error;

        console.log(result);
      }
    );
  },
  newEntry: function(tableName, attribute, value) {
    const query = "INSERT INTO ?? (?) VALUES (?)";
    connection.query(query, [tableName, attribute, value], (error, result) => {
      if (error) throw error;

      console.log(result);
    });
  }
};

module.exports = orm;
