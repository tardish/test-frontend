import { AutoComplete } from "antd";
import data from "./data";
import "./App.css";

const Autocom = () => (

  <AutoComplete
  className="auto"
    dataSource={data}
    placeholder="Input something"
  />
);
export default Autocom;
