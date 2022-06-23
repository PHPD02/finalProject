import React, { Component ,useState} from 'react';

// import { Select, AsyncSelect, CreatableSelect, AsyncCreatableSelect } from "chakra-react-select";
import {Select,SelectOption,SelectInput} from 'reaselct'
import CityCountyData from '../../../data/taiwan city country/CityCountyData.json'


function Reaselct (){
    const [value, setValue] = useState([]);
    const [city, setCity] = useState(['台北', '台中', '台南']);
    return (
      <div style={{ width: 300 }}>
        <Select
          multiple
          closeOnSelect={false}
          createable
          placeholder="請選擇地區"
          value={value}
          onChange={(v) => setValue(v)}
          onOptionsChange={(opts) => setCity(opts.map((o) => o.value))}
        >
          {city.map((o) => (
            <SelectOption key={o} value={o}>
              {o}
            </SelectOption>
          ))}
        </Select>
      </div>
    );
  }

export default Reaselct;