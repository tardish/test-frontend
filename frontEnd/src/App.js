import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./App.css";
import { TimePicker } from "antd";
import moment from "moment";
import Tables from "./Table";
import Autocom from "./Autocom";

function App() {
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  const [date, setDate] = useState(new Date());
  const format = "HH:mm";
  const d = new Date().toLocaleTimeString('th-TH', { hour12: false,hour: '2-digit', minute: '2-digit' });

  return (
    <div className="App"style={{height:window.innerHeight }}>
      <DatePicker
        className="date"
        onChange={setDate}
        value={date}
        locale="th"
      />
      <TimePicker
        className="time"
        onChange={onChange}
        defaultOpenValue={moment(new Date(), format)}
        format={format}
        placeholder={d}
      />
        <Autocom />
      <div className="table">
        <Tables />
      </div>
    </div>
  );
}

export default App;
