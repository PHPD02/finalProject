import React, { useState, useEffect } from "react";
import DashboardPanel from "./DashboardPanel
import '../css/DashboardPanel.css'

import Axios from "../axioss";

function EditInventary() {
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Picture1, setPicture1] = useState("");
  const [productList, setProductList] = useState("");
  
  useEffect(() => {
    Axios.get("http://localhost:8000/api/get").then((response) => {
      setProductList(response.data);
    });
  });

  const submit = (id) => {
    Axios.post("http://localhost:8000/api/update", { Id: Id, Name: Name, Description: Description,
    Picture1: Picture1,
  }).then(
      (response) => {
        setProductList(
          productList.map((val) => {
            return val.Id === Id
              ? {
                  Id: val.Id,
                  Name: val.Name,
                  Description: val.Description,
                  Picture1: val.Picture1,
                }
              : val;
          })
        );
      }
    );
  };


  const closePanel = () => {
    DashboardPanel.close({
      component: EditInventary,
      //試試記得改
      callback: (data) => {
        // console.log("Product Data:", data);
        // if (data) {
        //   this.add(data);
        // }
      },
    });
  };

  // state = {
  //   Id:"1521565",
  //   Name:"",
  //   Picture1:"",
  //   Description:"",
  //   Price:"",
  //   // Status:'available',
  // };
  // handleChange = (e) =>{
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   this.setState({
  //       [name]:value
  //   })
  // }
  // submit =(e) =>{
  //   e.preventDefault();
  //   const DashboardProduct ={...this.state};
  //   // console.log(restaurant);
  //   axios.post('restaurant',DashboardProduct).then((res) =>{
  //       console.log(res.data);
  //       this.props.close(res.data);
  //       alert('新增成功')
  //   });
  // };

  // render() {
  return (
    //  有bug 尺寸死都調不了
    <div className="inventary  " >
      <div className="has-text-centered is-size-3">商品訊息</div>
      <div className="field has-text-left" >
        <label className="label">商品描述</label>
        <div className="control">
          <textarea 
             className="textarea"
            name="Description"
            value={Description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {/* react裡對於textarea有不一樣的設定，去看官方文件 */}
        </div>
      </div>
      <div className="field has-text-left">
        <label className="label">品名</label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="Price"
            // value={this.state.Price}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="field has-text-left">
        <label className="label">Id</label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="Description"
            // value={this.state.Description}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="field has-text-left">
        <label className="label">商品圖(請輸入網址)</label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="Picture1"
            // value={this.state.Picture1}
            onChange={(e) => {
              setPicture1(e.target.value);
            }}
          />
        </div>
      </div>
      {/* <div className="field">
        <label className="label">營業時間</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              name="Status"
              // value={this.state.Status}
              onChange={(e) => {
                setId(e.target.value);
              }}
            >
              <option>available</option>
              <option>unavailable</option>
            </select>
          </div>
        </div>
      </div> */}
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button className="button is-link" onClick={submit}>
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button " type="button" onClick={closePanel}>
            取消
          </button>
        </div>
        {/* {productList.map((val)=>{
        return <h1>id:{val.Id}| name:{val.Name}</h1>      
        })} */}
      </div>
      {/* </form> */}

    </div>
  );
}
// }

export default EditInventary;
