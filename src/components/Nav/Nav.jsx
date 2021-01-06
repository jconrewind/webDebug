import { useState } from "react";

import { Tab, Tabs } from "@material-ui/core/";
import { Link } from "react-router-dom";

import { routes } from "../../constants";

function Nav({ items }) {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue({ value: newValue });
  };
  const getTemplate = async (_, value) => {
    let response = await fetch(`http://localhost:8001/template?id=${value}`)
      .then((res) => res.body)
      .then((body) => {
        console.log(body, "--> reader");
        const reader = body.getReader();
        console.log(reader, "--> reader");
        return reader.read();
      });
    console.log(response, "--> response");
    var string = new TextDecoder("utf-8").decode(response.value);
    console.log(string, "--> string");
  };

  return (
    <div>
      <Tabs
        value={value}
        orientation="vertical"
        onChange={handleChange}
        variant="scrollable"
        style={{ backgroundColor: "grey" }}
      >
        {items.map((el) => {
          return (
            <Tab
              id={el.id}
              label={el.fileName}
              component={Link}
              to={routes.DISPLAYER}
              onClick={(e) => getTemplate(e, el.id)}
            />
          );
        })}
      </Tabs>
    </div>
  );
}

export default Nav;
