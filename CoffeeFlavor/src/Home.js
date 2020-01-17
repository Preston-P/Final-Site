import React from "react";

import Tabs from "./tabs/tabProvider";
import TabHeader from "./tabs/tabheader";
import TabDetail from "./tabs/tabdetail";
import Background from "./Home-components/background";

const Home = () => {
  return (
    <Background>
      <h1>
        Best way to enjoy a cup
        <br />
      </h1>

      <Tabs>
        <TabHeader />
        <TabDetail />
      </Tabs>
    </Background>
  );
};
export default Home;
