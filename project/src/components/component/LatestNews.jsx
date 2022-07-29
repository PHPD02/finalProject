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
        // console.log(this.state.news)
        // console.log(this.state.news.newsitems);
      })
    }
  render() {
    return (
      <React.Fragment>
        {/* 電子報 */}{this.state.news.map((value)=>{
          return (
            <div className='col-4 d-flex'>
              {/* <div className="col-3 col-sm-4 col-md-4 col-lg-4 ml-2"> */}
              <div className="col mx-1">
                {/* <div className='card cardshadowNew' style={{ width: "400px", height: "200px" }}> */}
                <div className='card cardshadowNew w-100'>
                  <div>
                    <h4 style={{fontWeight:"bold"}}>{value.newsitems}</h4>
                  </div>
                  <div>
                    <p style={{color:"grey"}}>{value.newsnews}</p>
                  </div>
                  <div className='news-card-wrapper'>
                    {/*讓文字多於框框的變成點點點 className='text-nowrap text-truncate' */}
                    <p className='news-card'>{value.newscontents}</p>
                  </div>
                  <div>
                    <p>{}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
            
      </React.Fragment>
    );
  }
}

export default LatestNews;