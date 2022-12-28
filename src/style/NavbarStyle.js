import styled from "styled-components";

const Wrapper = styled.div`
  height: 10vh;
  width: 70vw;
  padding: 10px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    a {
      color: unset;
      text-decoration: none;
      font-size: 32px;
      span {
        color: lightcoral;
      }
    }
  }
  .search-bar {
    border: 1px solid black;
    height: 4vh;
    width: 30vw;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0 10px;
    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 18px;
      padding-left: 5px;
    }
  }
  .favourite {
    font-size: 30px;
    color: red;
    cursor: pointer;
    a {
      color: unset;
    }
  }
`;

export default Wrapper;
