import React, { useEffect } from "react";
import io from "socket.io-client";
const socket = io("ws://127.0.0.1:27105");

function Test() {
  // const [response, setResponse] = useState("");
  useEffect(() => {
    socket.on("connect", function () {
      console.log("connect");
    });
  }, []);

  return <p>{/* It's <time dateTime={response}>{response}</time> */}</p>;
}

export default Test;
