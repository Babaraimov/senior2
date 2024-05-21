import Logo from "../../Atoms/Logo/Logo";
import SidebarList from "../../Molecules/SidebarList/SidebarList";
import {
  SidebarBack,
  SidebarBlock,
  SidebarFooter,
  SidebarHead,
  SidebarStyled,
  SidebarTitle,
} from "./styled";
import { MAINLIST, SALESCHANNEL, SETTING } from "./const";

function Sidebar() {
  return (
    <SidebarStyled>
      <SidebarHead>
        <SidebarBlock>
          <Logo />
          <SidebarBack></SidebarBack>
        </SidebarBlock>
        <SidebarBlock>
          <SidebarTitle>MENU</SidebarTitle>
          <SidebarList list={MAINLIST} />
        </SidebarBlock>
        <SidebarBlock>
          <SidebarTitle>SALES CHANNEL</SidebarTitle>
          <SidebarList list={SALESCHANNEL} />
        </SidebarBlock>
      </SidebarHead>
      <SidebarFooter>
        <SidebarBlock>
          <SidebarList list={SETTING} />
        </SidebarBlock>
      </SidebarFooter>
    </SidebarStyled>
  );
}

export default Sidebar;
