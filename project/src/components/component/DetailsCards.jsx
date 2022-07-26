import React, { Component } from 'react';
import axios from 'axios';
class Details extends Component {
  state = {
    details: {
      water: '',
      menu: [
        { amount: "", cost: "", dish: "", sum: "" }
      ],
      sums: '',
    },
  }
  componentDidMount = async () => {
    let url = "http://localhost/ourPHPFinalproject/RjieProject/details.php"
    await axios.get(url)
      .then(res => {
        this.state.details = res.data;
        this.state.length = this.state.details.menu.length;
        // console.log(this.state.details.menu);
        // console.log(this.state);
        this.setState({});
      });
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <h5>訂單編號{this.state.details.water}</h5>
        <br />
        <h5>訂單配送來自:{ }</h5>
        <br />
        <h5>送餐地址:{ }</h5>
        <br />
        <h5>總計:$ {this.state.details.sums}</h5>
        {/* 撈資料庫產生 */}
        {/* <h5>查看細節{this.state.details.menu}個品項: */}
        <h5>查看細節{this.state.length}個品項:
          <span className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {this.state.details.menu.map((menui, index) => {
                return (
                  <div key={index}>
                    <div className="dropdown-item ">
                      <div className='container'>
                        <div className='row'>
                          <div className="col-3">{menui.dish}{menui.amount}{menui.cost}{menui.sum}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </span></h5>
      </React.Fragment>
    );
  }
}

export default Details;