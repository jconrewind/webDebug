import { useState } from "react";

import Tabs from "../Tabs/Tabs";

function HomePage() {
  const [serverIP, setServerIP] = useState("");
  const [displayTabs, setDisplayTabs] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(serverIP, "--> serverIP");

    fetch(`http://localhost:8000/debuglist`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "--> json");
        setDisplayTabs((v) => (v = true));
      });
  };

  const handleIpChange = (e) => {
    setServerIP((v) => (v = e.target.value));
  };

  return (
    <div
      className="homepage"
      style={{
        border: "1px solid green",
        height: "90vh",
      }}
    >
      <div>{displayTabs && <Tabs />}</div>
      <div
        style={{
          height: "45vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form>
          <label style={{ color: "white" }}>
            Server IP:
            <input
              type="text"
              name="serverip"
              value={serverIP}
              onChange={handleIpChange}
            />
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default HomePage;
