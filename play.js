const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting...");
connect();
