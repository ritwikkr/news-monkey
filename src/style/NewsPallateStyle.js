import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .none {
    margin-top: 100px;
    text-align: center;
    p {
      font-size: 64px;
      font-weight: 900;
      small {
        font-size: 32px;
      }
    }
  }
`;

export default Wrapper;
