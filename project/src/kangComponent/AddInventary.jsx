import React from "react";
import axios from "./axios";

class AddInventary extends React.Component {
  state = {
    Id:"1521565",
    Name:"",
    Picture1:"",
    Description:"",
    Price:"",
    // Status:'available',
  };
  handleChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
        [name]:value
    })
  }
  submit =(e) =>{
    e.preventDefault();
    const DashboardProduct ={...this.state};
    // console.log(restaurant);
    axios.post('/restaurant',DashboardProduct).then((res) =>{
        console.log(res.data);
        this.props.close(res.data);
        alert('新增成功')
    });
  };

  render() {
    return (
      <div className="inventary">
        <p className="title ">Inventary</p>
        <form onSubmit={this.submit}>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                name="Name"
                value={this.state.Name}
                onChange={this.handleChange}
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
                value={this.state.Price}
                onChange={this.handleChange}
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
                value={this.state.Description}
                onChange={this.handleChange}
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
                value={this.state.Picture1}
                onChange={this.handleChange}
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
                  value={this.state.Status}
                  onChange={this.handleChange}
                >
                  <option>available</option>
                  <option>unavailable</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button className="button is-link" >Submit</button>
            </div>
            <div className="control">
              <button
                className="button "
                type="button"
                onClick={() => {
                  this.props.close();
                }}
              >
                取消
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddInventary;
