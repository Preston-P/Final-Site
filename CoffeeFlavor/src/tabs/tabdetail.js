import React from "react";
import Text from "../Home-components/tabText";

import TabsContext from "./tabsContext";

const TabDetails = () => {
  return (
    <Text>
      <TabsContext.Consumer>
        {({ selectedDetails }) => <div>{selectedDetails}</div>}
      </TabsContext.Consumer>
    </Text>
  );
};

export default TabDetails;
