import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:27105");

function TEST() {
  console.log(socket, "--> socket");

  socket.on("connect", () => {
    console.log("connect");
  });

  return (
    <>
      <h1 style={{ color: "white", textAlign: "centers" }}>Socket with Zeng</h1>
      <div></div>
    </>
  );
}

export default TEST;
