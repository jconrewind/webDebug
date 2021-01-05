import { useState } from "react";

import Nav from "../Nav/Nav";

function HomePage() {
  const [providersItems, setProvidersItems] = useState([]);
  const [displayTabs, setDisplayTabs] = useState(false);
  const [serverIP, setServerIP] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(serverIP, "--> serverIP");

    fetch(`http://localhost:8000/debuglist`)
      .then((res) => res.json())
      .then((json) => {
        const { allPages } = json;
        console.log(allPages, "--> allPages");
        let pages = allPages.filter((el) => el.name);
        console.log(pages, "--> pagesfinal");
        setProvidersItems((items) => (items = pages));
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
      <div>{displayTabs && <Nav items={providersItems} />}</div>
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
