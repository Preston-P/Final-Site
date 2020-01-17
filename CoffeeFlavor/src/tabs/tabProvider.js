import React from "react";
import TabsContext from "./tabsContext";

const coffees = [
  { type: "Fruity", descr: "Fruity: Light roast" },
  { type: "Biscuit", descr: "Biscuit: Medium roast" },
  { type: "Chocolate", descr: "Chocolate: Medium light roast" },
  { type: "Earthy", descr: "Earthy: Dark roast" }
];

export default class Tabs extends React.Component {
  state = {
    selectedTabIndex: 0
  };
  selectTab = selectedTabIndex => {
    this.setState({ selectedTabIndex });
  };
  render() {
    const {
      selectTab,
      state: { selectedTabIndex }
    } = this;

    return (
      <TabsContext.Provider
        value={{
          selectedTabIndex,
          selectTab,
          headers: coffees.map(({ type }) => ({ type })),
          selectedDetails: coffees[selectedTabIndex].descr
        }}
      >
        {this.props.children}
      </TabsContext.Provider>
    );
  }
}

/* The main  information that is passed through the context and is passed down 
to other componnents  */

/* Will output all 3 of drip, espresso, and cold brew and their descriptions */
