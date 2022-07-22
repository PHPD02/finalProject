import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './css/latesnews.css';
import axios from 'axios';
class LatestNews extends Component {
  state = {
    news:[]
  }
  componentDidMount = async () => {
    let url = "http://localhost/ourPHPFinalproject/RjieProject/latestNews.php";
    await axios.get(url)
      .then(res => {
        this.state.news = res.data;
        this.setState({})
        console.log(this.state.news)
        // console.log(this.state.news.newsitems);
      })
    }
  render() {
    return (
      <React.Fragment>
        {/* 電子報 */}
            <div className='row'>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4 ml-2">
                <div className='card cardshadowNew' style={{ width: "400px", height: "200px" }}>
                  <div>
                    <h4>{}</h4>
                  </div>
                  <div>
                    <p>{}</p>
                  </div>
                  <div>
                    {/*讓文字多於框框的變成點點點 className='text-nowrap text-truncate' */}
                    <p className='text-nowrap text-truncate'>{}</p>
                  </div>
                  <div>
                    <p>{}</p>
                  </div>
                </div>
              </div>
            </div>
      </React.Fragment>
    );
  }
}

export default LatestNews;