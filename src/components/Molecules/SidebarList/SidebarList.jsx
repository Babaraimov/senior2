import SidebarItem from "../../Atoms/SidebarItem/SidebarItem";
import { SidebarListStyled } from "./styled";

function SidebarList({ list = [] }) {
  return (
    <SidebarListStyled>
      {list.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </SidebarListStyled>
  );
}

export default SidebarList;
