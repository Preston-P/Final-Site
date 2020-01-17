import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background: black;
  color: white;
  font-size: 1.3rem;
  z-index: -1;

  background: linear-gradient(rgba(0, 0, 0, 1), transparent),
    url("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ul {
    min-width: 30vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-decoration: none;
  }

  h3 {
    position: absolute;
    left: 9%;
  }
`;
