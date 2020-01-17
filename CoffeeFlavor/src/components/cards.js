import styled from "styled-components";

export default styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  min-height: 40vh;

  justify-content: start;
  align-items: center;

  flex-wrap: wrap;

  img {
    min-width: 20rem;
    max-height: 20rem;
    margin: 2rem;
    object-fit: cover;

    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
