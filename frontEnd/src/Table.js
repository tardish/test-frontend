import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "./App.css";
import { Spin } from "antd";
import data from "./data";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],

    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => {
      if (a.address < b.address) return -1;
      if (a.address > b.address) return 1;
      return 0;
    },
  },
];

function Tables() {
  const [load, setLoad] = useState(false);
  const [dataTable, setDataTable] = useState([]);

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a onClick={Delay}>Previous</a>;
    }
    if (type === "next") {
      return <a onClick={Delay}>Next</a>;
    }
    return originalElement;
  }
  const Delay = async () => {
    await setLoad(true);
    await setTimeout(() => {
      setLoad(false);
    }, 500);
  };

  const fetchData = async () => {
    await setTimeout(() => {
      setLoad(true);
    }, 100);
    await setTimeout(() => {
      setDataTable(data);
    }, 1000);
    await setTimeout(() => {
      setLoad(false);
    }, 3000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataTable}
        loading={load && { indicator: <Spin tip="Loading..."></Spin> }}
        pagination={{
          pageSize: 5,
          showQuickJumper: true,
          itemRender: itemRender,
        }}
        scroll={{ y: 550 }}
      />
    </div>
  );
}

export default Tables;
