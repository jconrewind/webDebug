import { useState } from "react";

import { Tab, Tabs } from "@material-ui/core/";
import { Link } from "react-router-dom";

import { routes } from "../../constants";

function Nav({ items }) {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue({ value: newValue });
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
          return <Tab label={el.name} component={Link} to={routes.DISPLAYER} />;
        })}
      </Tabs>
    </div>
  );
}

export default Nav;
