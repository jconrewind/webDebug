import React, { useEffect } from "react";
import io from "socket.io-client";
// const socket = io("http://localhost:27105");
const socket = io("http://localhost:8000");

function Test() {
  // const [response, setResponse] = useState("");
  useEffect(() => {
    socket.on("new-remote-operations", (message) => {
      console.log(message, "--> message");
    });
  }, []);

  return <p>{/* It's <time dateTime={response}>{response}</time> */}</p>;
}

export default Test;
