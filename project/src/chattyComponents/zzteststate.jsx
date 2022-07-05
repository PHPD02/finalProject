// export default function test(){ 
//     function ListItem(props) {
//         // 正確！你不需要在這裡指出 key：
//         return <li>{props.value}</li>;
//       } 
//     function NumberList(props) {
//         const numbers = props.numbers;
//         const listItems = numbers.map((number) =>
//           // 正確！Key 應該在 array 內被指定。
//           <ListItem key={number} value={number} />
//         );
//         return (
//           <ul>
//             {listItems}
//           </ul>
//         );
//       }
//     const numbers = [1, 2, 3, 4, 5];
//     return (
//         <NumberList numbers={numbers} />
//     );   
// }

// export default function test() {
//     const numbers = [1, 2, 3, 4, 5];
//     // const numberlist = numbers.map((number) => <li key={number}>{number}</li>)
//     function ListItem(props) {
//         return numbers.map((number) => <li key={number}>{number}</li>)
//     }
//     return (
//         // numbers.map((number) => <li key={number}>{number}</li>)
        
//         <ul>
//             <ListItem key={numbers}/>
//         </ul>
//     )

// }

import React, { Component } from 'react';

class Test1 extends Component {
    state = { 
        numbers: [1, 2, 3, 4, 5]
     } 
    
    chanli = (number) =>{
        return (
            this.state.numbers.map((number) => <li key={number}>{number}</li>)

        )
        
    }
    

    render() { 
        return (
            this.chanli()
            
        );
    }
}
 
export default Test1;



  
  