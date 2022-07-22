import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/latesnews.css';
import axios from 'axios';
class LatestNews extends Component {
  state = {}


  componentDidMount = async() =>{
    let url = "ok";
    await axios.get(url)
    console.log(url)
  }





  render() {
    return (
      <React.Fragment>
        {/* 電子報 */}


      
        <div className='row'>
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 ml-2">
            <div className='card cardshadowNew' style={{ width: "350px", height: "200px" }}>
              <div>
                <h4>電子報</h4>
              </div>
              <div>
                <p>電子報8月號</p>
              </div>
              <div>
              {/*讓文字多於框框的變成點點點 className='text-nowrap text-truncate' */}
                <p>8月份電子報為夥伴精選多項夏季活動，請好好把握！！</p>
              </div>
              <div>
                <p>2022/08/07</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LatestNews;