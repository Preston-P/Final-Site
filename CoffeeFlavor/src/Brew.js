import React from "react";
import Header1 from "./components/header";
import Cards from "./components/cards";
import Card from "./components/card";
import ImgCard from "./components/card-icon";
import Coffee from "./state/coffee";

function Brew() {
  return (
    <div className="App">
      <Header1>
        <h1> Brew Methods</h1>
      </Header1>
      <Cards>
        <Card>
          <ImgCard>
            <img
              src="https://images.pexels.com/photos/2878712/pexels-photo-2878712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </ImgCard>

          <Coffee
            type="Drip"
            descr="Enjoyed by hot water poured through coffeee grounds for a refreshing taste"
          />
        </Card>

        <Card>
          <ImgCard>
            {" "}
            <img
              src="https://images.pexels.com/photos/2067404/pexels-photo-2067404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </ImgCard>
          <Coffee
            type="Cold-Brew"
            descr="coffee grounds soaked over night for a light drink"
          ></Coffee>
        </Card>

        <Card>
          <ImgCard>
            {" "}
            <img
              src="https://images.pexels.com/photos/1233537/pexels-photo-1233537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />{" "}
          </ImgCard>
          <Coffee
            type="Espresso"
            descr="Taken as a shot or enjoyed with steamed milk"
          ></Coffee>
        </Card>
      </Cards>
    </div>
  );
}

export default Brew;
