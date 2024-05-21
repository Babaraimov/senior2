import React from "react";
import { SidebarStyled } from "./styled";

function SidebarItem({ item }) {
  const { label, icon: Icon, to } = item;
  return (
    <SidebarStyled to={to}>
      <span>{Icon && <Icon />}</span>
      <span>{label}</span>
    </SidebarStyled>
  );
}

export default SidebarItem;
