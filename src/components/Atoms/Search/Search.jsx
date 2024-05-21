import React from "react";
import { SearchBlock, SearchIconStyled, SearchInput } from "./styled";
import SearcIcon from "../../../assets/Icons/SearchIcon";

function Search({ value, setValue }) {
  return (
    <SearchBlock>
      <SearchIconStyled>
        <SearcIcon />
      </SearchIconStyled>
      <SearchInput
        placeholder="Search by ID, product, or others..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchBlock>
  );
}

export default Search;
