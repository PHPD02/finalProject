
import React, { Component ,useState} from 'react';
import {Select,SelectOption,SelectInput} from 'reaselct'

import CityCountyData from '../../../data/taiwan city country/CityCountyData.json'
const CityArray = CityCountyData.map((value)=>value.CityName)


/* === class 版本 document 範例改寫 ==== */
// class Test extends Component {
//   state = {
//     value: [],
//     animals: ['chicken', 'cow', 'mouse']
//   }
//   setValue = (v)=>{
//     this.state.value = v;
//     this.setState({});
//   }
//   setAnimals = (opts)=>{
//     this.state.animals = opts.map((o) => o.value);
//     this.setState({});
//   }
//   render() {
//     return (
//       <div style={{ width: 300 }}>
//         <Select
//           multiple
//           closeOnSelect={false}
//           createable
//           placeholder="Add some categories or pick existing one..."
//           value={this.state.value}
//           onChange={(v) => this.setValue(v)}
//           onOptionsChange={(opts) => this.setAnimals(opts)}
//         >
//           {this.state.animals.map((o) => (
//             <SelectOption key={o} value={o}>
//               {o}
//             </SelectOption>
//           ))}
//         </Select>
//       </div>);
//   }
// }
// export default Test;


/* === class 版本 - 台灣縣市 ==== */
class Test extends Component {
  state = {
    value: [],
    city: CityArray
  }
  setValue = (v)=>{
    this.state.value = v;
    this.setState({});
  }
  setCity = (opts)=>{
    this.state.city = opts.map((o) => o.value);
    this.setState({});
  }
  render() {
    return (
      <div style={{ width: 300 }}>
        <Select
          multiple
          closeOnSelect={false}
          createable
          placeholder="請選擇縣市"
          value={this.state.value}
          onChange={(v) => this.setValue(v)}
          onOptionsChange={(opts) => this.setCity(opts)}
        >
          {this.state.city.map((o) => (
            <SelectOption key={o} value={o}>
              {o}
            </SelectOption>
          ))}
        </Select>
      </div>);
  }
}
export default Test;


/* === function 版本 - 台灣縣市 === */
// function Test (){
//   const [value, setValue] = useState([]);
//   // const [city, setCity] = useState(['台北', '台中', '台南']);
//   const [city, setCity] = useState(CityArray);
//   return (
//     <div style={{ width: 300 }}>
//       <Select
//         multiple
//         closeOnSelect={false}
//         createable
//         placeholder="請選擇縣市"
//         value={value}
//         onChange={(v) => setValue(v)}
//         onOptionsChange={(opts) => setCity(opts.map((o) => o.value))}
//       >
//         {city.map((o) => (
//           <SelectOption key={o} value={o}>
//             {o}
//           </SelectOption>
//         ))}
//       </Select>
//     </div>
//   );
// }

// export default Test;