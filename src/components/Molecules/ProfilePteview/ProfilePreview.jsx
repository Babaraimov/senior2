import React from "react";
import {
  ProfileCompanyName,
  ProfileFullName,
  ProfileImage,
  ProfileStyled,
  ProfileTexts,
} from "./styled";

function ProfilePreview() {
  return (
    <ProfileStyled>
      <ProfileImage src="./asstets/image/avatar.png" />
      <ProfileTexts>
        <ProfileFullName>Tynisha Obey</ProfileFullName>
        <ProfileCompanyName>Makostore</ProfileCompanyName>
      </ProfileTexts>
    </ProfileStyled>
  );
}

export default ProfilePreview;
