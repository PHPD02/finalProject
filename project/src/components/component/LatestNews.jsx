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
<<<<<<< HEAD
        <header className='container'>
          <div className='row'>
            {/* <div 
            className='col-md-10' 
            id='news'
            > */}
              <h1>最新公告</h1>
              <hr 
              className='w-100 bg-danger' 
              />
            </div>
            <div className='col-my-1 mt-5'>
              <p>第一手重要通知，不容錯過</p>
            {/* </div> */}
          </div>

        </header>
        {/* 電子報 */}
        <section className="container">
          <div className='row m-1'>
            {/* 八月電子報 */}
            <div className=" col-md-4 ">
              <div className='container card cardshadow'>
                <b className='p-1'>
                  <div className='row'>
                    <h4>電子報</h4>
=======
        {/* 電子報 */}{this.state.news.map((value)=>{
          return (
            <div className='col-4 d-flex'>
              {/* <div className="col-3 col-sm-4 col-md-4 col-lg-4 ml-2"> */}
              <div className="col m-auto">
                {/* <div className='card cardshadowNew' style={{ width: "400px", height: "200px" }}> */}
                <div className='card cardshadowNew w-100'>
                  <div>
                    <h4>{value.newsitems}</h4>
>>>>>>> origin/RJIEtest
                  </div>
                  <div>
                    <p>{value.newsnews}</p>
                  </div>
                  <div>
                    {/*讓文字多於框框的變成點點點 className='text-nowrap text-truncate' */}
                    <p className='text-nowrap text-truncate'>{value.newscontents}</p>
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