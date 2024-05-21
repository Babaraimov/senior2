import React, { useEffect, useState } from "react";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import { BlockContainer } from "../../../Base/styled";
import Tabs from "../../Molecules/Tabs/Tabs";
import { TABS_LIST, ordersList } from "./const";
import Table from "../../Molecules/Table/Table";
import Search from "../../Atoms/Search/Search";

function Orders() {
  const [tabsList, setTabsList] = useState(TABS_LIST);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(ordersList);

  useEffect(() => {
    searchByTitle(search);
  }, [search]);

  const setTab = (id) => {
    const data = tabsList.map((tab) => {
      if (tab.id === id) {
        tab.active = true;
      } else {
        tab.active = false;
      }
      return tab;
    });
    setTabsList(data);
  };

  const searchByTitle = (title) => {
    // const data = ordersList.map(item => {
    //   if (item.title.includes(title)){
    //     return item
    //   }
    // }).filter(item => item)

    const sendData = ordersList.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .trim()
        .includes(title.toLocaleLowerCase().trim())
    );

    setData(sendData);
    console.log(data);
  };

  return (
    <MainTemplate title="Orders">
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <Search value={search} setValue={setSearch} />
        <Table data={data} />
      </BlockContainer>
    </MainTemplate>
  );
}

export default Orders;
