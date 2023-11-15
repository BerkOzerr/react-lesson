import React from "react";
import styled from "@emotion/styled";

const Container1 = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 100vh;
  padding: 50px 0;
  text-align: center;
`;
const ImgLogo = styled.img`
  width: 50px;
`;
const Header = styled.header`
  background-color: indianred;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;
`;

function Container() {
  return (
    <div>
      <Header>
        <ImgLogo src="/logo192.png" />
        <div>
          <a href="#">Home </a> <a href="#">Back</a>
        </div>
      </Header>
      <Container1>
        <table width="100%">
          <thead>
            <th>Ad</th>
            <th>Soyad</th>
          </thead>
          <tbody>
            <tr>
              <td>Berk Emre</td>
              <td>Özer</td>
            </tr>
          </tbody>
        </table>
      </Container1>
      <footer>Deneme sürümü</footer>
    </div>
  );
}

export default Container;
