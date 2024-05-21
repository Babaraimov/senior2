import React from "react";
import { Container, MainContainer } from "./styled";
import Navbar from "../../Organisms/Navbar/Navbar";
import Sidebar from "../../Organisms/Sidebars/Sidebar";

export default function MainTemplate({ children, title }) {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <Navbar title={title} />
        <Container>{children}</Container>
      </MainContainer>
    </>
  );
}
