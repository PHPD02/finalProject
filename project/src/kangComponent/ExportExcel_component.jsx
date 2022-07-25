import React from "react";
import ExcelJs from "exceljs";

export function ExportExcelButton (props){
  function onClick(){
    const workbook = new ExcelJs.Workbook();
    props.sheetDatas.forEach((sheetData)=>{
        const sheet = workbook.addWorksheet(sheetData.sheetName);
        sheet.addTable({
            name: sheetData.sheetName,
            ref: `A1`, // 從A1開始
            headerRow: true,
            columns: sheetData.thead.map((s)=>{ return {name: s}}),
            rows: sheetData.tbody
        });
        if (sheetData.columnWidths) {
          sheetData.columnWidths.forEach((column)=>{
              sheet.getColumn(column.number).width = column.width
          });
        }
    })

    // 表格裡面的資料都填寫完成之後，訂出下載的callback function
		// 異步的等待他處理完之後，創建url與連結，觸發下載
    workbook.xlsx.writeBuffer().then((content) => {
      const link = document.createElement("a");
      const blob = new Blob([content], {
        type: "application/vnd.ms-excel;charset=utf-8;"
      });
      link.download = `${props.fileName}.xlsx`;
      link.href = URL.createObjectURL(blob);
      link.click();
    });
  };

  const style = {
      borderRadius: '5px',
      ...props.style
  }

  return (
      <button
          ref={props.buttonRef}
          disabled={props.disabled}
          onClick={onClick}
          style={style}
          className="btn btn-outline-secondary btn-lg"
      >
        下載報表
      </button>
    )
};


export default ExportExcelButton;



// import React, { Component } from 'react';
// import axios from './axios';

// // var result = axios.get("http://localhost:8050/dashboardorder");
// // var resultData = result.data
// // console.log(resultData)
// class ExportExcelButton extends Component {
//     state = {
//         dashboardorder: [], 
//     }
//     async componentDidMount() {
//         var result = await axios.get("http://localhost:8050/dashboardorder");
//         this.setState({ dashboardorder: result.data} );
//         console.log(result)
//     }

//     render() { 
//         return (
//             // this.state.dashboardorder.map((item,index)=>{
//             //     let date = new Date(item.orderId*1000);
//             //     //   console.log()
//             //     let ymd = date.toLocaleDateString();
      
//             //     return(
//             //       [item.orderId.toString(),ymd.toString(),item.dish.toString()],
//             //       console.log([item.orderId.toString(),ymd.toString(),item.dish.toString()])

//             //     )
      
//             //   })
//             JSON.stringify(this.state.dashboardorder)
//         );
//     }
// }
 
// export default ExportExcelButton;


