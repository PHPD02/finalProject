import Axios from 'axios';
import React, { Component } from 'react';
// import $ from 'jquery';


class StoreCard extends Component {
  state = {
    // menuList:[]
  }

  // async componentDidMount() {
  //   var result = await Axios.get("http://localhost:8000/todo/list");
  //   // this.state.todoList = result.data;
  //   // this.setState({});
  //   this.setState({
  //       menuList: result.data
  //   })
  //   console.log(this.state.menuList)
  // }


  render() {
    const {menuItemId, dish, type, introduce, picture, cost} = this.props.StoreCard;
    return (
      <React.Fragment>
        <div className='card' style={{ boxShadow: "3px 3px 3px grey" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <img src={picture} alt="" height="100" />
                {/* 圖片 */}
                {/* <svg className="bd-img bd-img-lg featurette-image img-fluid rounded float-left" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eee" /><text x="25%" y="25%" fill="#aaa">100x100</text></svg> */}
                <div className='row m-2'>
                  <div className='col'>
                    {/* 商品名稱 */}
                    <h4>{dish}</h4>
                    <br />
                    {/* 金額 */}
                    <span>$<span>{cost}</span></span>
                    <div>1{menuItemId}</div>
        <div>2{dish}</div>
        <div>3{type}</div>
        <div>4{introduce}</div>
        <div>5{picture}</div>
        <div>6{cost}</div>

                  </div>
                  <button type="button" className='mt-4 btn btn-primary rounded-lg'>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <button onClick={this.handleSumbit}>click me</button> */}

        {/* <div>{this.state.menuList.dish}</div> */}
        




      </React.Fragment>
    );
  }
}

export default StoreCard;