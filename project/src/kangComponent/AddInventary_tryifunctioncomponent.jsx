import React, { useState, useEffect } from "react";
// import axios from "./axios";
import Axios from "axios";

function AddInventary_tryifunctioncomponent() {
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [productList, setProductList] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:8000/api/get").then((response) => {
      setProductList(response.data);
    });
  });

  const submit = () => {
    Axios.post("http://localhost:8000/api/insert", { Id: Id, Name: Name }).then(
      () => {
        alert("成功插入");
      }
    );
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
    <div className="inventary">
      <p className="title ">Inventary</p>
      {/* <form > */}
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            name="Name"
            // value={this.state.Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* react裡對於textarea有不一樣的設定，去看官方文件 */}
        </div>
      </div>
      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input
            type="number"
            className="input"
            name="Price"
            // value={this.state.Price}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="Description"
            // value={this.state.Description}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="Picture1"
            // value={this.state.Picture1}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>
      <br />
      <div className="field">
        <label className="label">Status</label>
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
      </div>
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button className="button is-link" onClick={submit}>
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button " type="button">
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

export default AddInventary_tryifunctioncomponent;
