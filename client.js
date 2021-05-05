const net = require("net");
const { IP, PORT } = require("./constants");

const args = process.argv.slice(2);
let initials = "";
if (args.length > 1 || args[0].length > 3) {
  console.log(
    "Please enter initials as a single argument less than or equal to 3 characters"
  );
  process.exit();
} else {
  initials += args[0];
}

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${initials}`);
  });

  return conn;
};

module.exports = { connect };
