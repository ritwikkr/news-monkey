import styled from "styled-components";

const Wrapper = styled.div`
  width: 400px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  a {
    color: unset;
    text-decoration: unset;
    .card-title {
      position: relative;
      /* height: 100px; */
      /* border: 2px solid red; */
      h1 {
        width: 90%;
      }
      .date {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      i {
        font-size: 20px;
        position: absolute;
        right: 3%;
        top: 10%;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        &:hover {
          transform: rotateY(180deg);
          color: red;
        }
      }
    }
    .card-body {
      margin: 20px 0;
      position: relative;
      .image {
        width: 100%;
        height: 150px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        /* border: 2px solid red; */
        line-height: 20px;
        font-size: 18px;
        margin-top: 10px;
        height: 140px;
        .author {
          position: absolute;
          bottom: 0;
          right: 0;
          font-style: italic;
          color: lightcoral;
        }
      }
    }
  }
`;

export default Wrapper;
