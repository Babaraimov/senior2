import EmailImg from "../../../assets/Icons/EmailImg";
import BellImg from "../../../assets/Icons/BellImg";
import ProfilePreview from "../../Molecules/ProfilePteview/ProfilePreview";
import { NavbarLeft, NavbarRigth, NavbarStyled, NavbarTitle } from "./styled";

function Navbar({ title }) {
  return (
    <NavbarStyled>
      <NavbarLeft>
        <NavbarTitle>{title}</NavbarTitle>
      </NavbarLeft>
      <NavbarRigth>
        <EmailImg />
        <BellImg />
        <ProfilePreview />
      </NavbarRigth>
    </NavbarStyled>
  );
}

export default Navbar;
