import React from "react";

import TabsContext from "./tabsContext";
import Tab from "./tab";
import Display from "../Home-components/tabButton";

const TabHeader = () => {
  return (
    <Display>
      <TabsContext.Consumer>
        {({ headers, selectedTabIndex, selectTab }) =>
          headers.map(({ type }, index) => (
            <Tab
              name={type}
              key={index}
              selected={selectedTabIndex === index}
              handleClick={() => {
                selectTab(index);
              }}
            />
          ))
        }
      </TabsContext.Consumer>
    </Display>
  );
};

export default TabHeader;
