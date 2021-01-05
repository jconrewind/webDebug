import { Tab, Tabs as Onglet } from "@material-ui/core/";

function Tabs() {
  return (
    <div>
      <Onglet
        style={{ backgroundColor: "grey" }}
        orientation="vertical"
        variant="scrollable"
        // value={value}
        // onChange={handleChange}
        // aria-label="Vertical tabs example"
        // className={classes.tabs}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
      </Onglet>
    </div>
  );
}

export default Tabs;
