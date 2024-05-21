import React from "react";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableOrder,
  TableOrderId,
  TableStatus,
  TableTd,
  TableTh,
  TableTr,
} from "./styled";
import CheckBox from "../../Atoms/CheckBox/CheckBox";

function Table({ data }) {
  return (
    <TableContainer>
      <TableHead>
        <TableTr>
          <TableTh> 1</TableTh>
          <TableTh> Orders </TableTh>
          <TableTh> Date </TableTh>
          <TableTh> Customer </TableTh>
          <TableTh> Payment </TableTh>
          <TableTh> Status </TableTh>
          <TableTh> Price </TableTh>
        </TableTr>
      </TableHead>
      <TableBody>
        {data?.map((item, idx) => (
          <TableTr key={idx}>
            <TableTd>
              <CheckBox id={item.id} />
            </TableTd>
            <TableTd>
              <TableOrder>{item.title}</TableOrder>
              <TableOrderId>{item.id}</TableOrderId>
            </TableTd>
            <TableTd>{item.date}</TableTd>
            <TableTd>{item.customer.full_name}</TableTd>
            <TableTd>
              <TableStatus background="#E7F7EF" color="#0caf60">
                {item.payment_status}
              </TableStatus>
            </TableTd>
            <TableTd>
              <TableStatus background="#FFF0E6" color="#FE964A">
                {item.status}
              </TableStatus>
            </TableTd>
            <TableTd>$ {item.price}</TableTd>
          </TableTr>
        ))}
      </TableBody>
    </TableContainer>
  );
}

export default Table;
