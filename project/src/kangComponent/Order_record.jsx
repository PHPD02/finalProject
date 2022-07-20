import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../css/MemberPage.css";
import axios from "axios";
// import img from "https://picsum.photos/150/110"

class Order_record extends React.Component {
  state = {
    orderdetails: [],
    sunsua_order:[],

  };
  async componentDidMount() {
    var result = await axios.get("http://localhost:8050/orderdetails/list");
    this.setState({ orderdetails: result.data });
    console.log(result.data);

    var sunsua_order = await axios.get("http://localhost:8050/sunsua_order/list");
    this.setState({ sunsua_order: sunsua_order.data });
    console.log(sunsua_order.data);
    
  }
  // eachItem(){
  //   this.setState.orderdetails.forEach(element => {
      
  //   });
  // }  沒成功

  render() {
    return (
      <React.Fragment>
        <div className="container d-flex justify-content-center">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <h2 className="card-title text-center font-weight-bold h2">
                <p>順弁收益</p>
              </h2>
              <h6 className="card-subtitle text-muted my-4 text-center">
                我們將於每月15日將上月收益匯至您的帳戶，當然，您也可以隨時提領，但您需要額外支付手續費。
              </h6>
                <div className="row  text-center d-flex align-items-center">
                  <div className="col-5">
                    <i
                      className="fa fa-gift"
                      aria-hidden="true"
                      style={{ fontSize: "80px" }}
                    ></i>
                  </div>
                  <div className="col-7">
                    <p className="card-text" style={{ fontSize: "50px" }}>
                      $500元
                    </p>
                  </div>
                <div className="row  text-center mt-4 font-weight-bold h4 mx-auto">
                  <div className="col ">
                    <button className="card_button_effect Vbtn ">
                      <svg>
                        <rect
                          x="0"
                          y="0"
                          fill="none"
                          width="100%"
                          height="100%"
                        ></rect>
                      </svg>
                      提領錢包
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="card mr-5" style={{ width: "60rem" }}>
            <div className="text-left h1 my-4">
              <h2>
                <i className="fa fa-list mr-4"></i>下單紀錄
              </h2>
            </div>
            <ul className="list-group">
              
            {this.state.orderdetails.map((item, index) => {
              return (
              <li className="list-group-item" key={index}>
                  <div className="row d-flex align-items-center">
                    <div className="col-3" >
                      {/* <img
                        src="https://picsum.photos/150/110"
                        class="card-img-left"
                        alt="..."
                      /> */}
                      
                    </div>
                    <div className="col-6">
                      <h5 className="card-title h4 font-weight-bold">
                        水巷茶弄(台中中清店)
                        {/* 到時候看要join哪一張表 */}
                      </h5>
                      <div className="card-text">
                        <p className="order_item h5">{this.state.orderdetails[0].dish}、{this.state.orderdetails[1].dish}</p>
                        <br />
                        <p className="order_date">2022年5月26日</p>
                        {/* 欄位沒有date */}
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <p className="h3 text-nowrap" >${item.amount*item.cost}元</p>
                      </div>
                    </div>
                  </div>
                  <Accordion
                    style={{
                      borderTop: "1px solid black",
                      marginTop: "20px",
                      fontSize: "15px",
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="mt-3 font-weight-bold "
                      style={{fontSize:"22px"}}
                      >
                        <span>查看品項細節({this.state.orderdetails.length}個品項)</span>
                        <span className="ml-2">
                          <i class="fa-solid fa-angles-down"></i>
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <ul className="list-group mt-4 ">
                            <div className="container-fluid">
                              <div className="row d-flex ">
                                <div className="col-10 ">品項</div>
                                <div className="col-1 text-nowrap">數量</div>
                                <div className="col-1 text-nowrap">金額</div>
                              </div>
                            </div>
                            <li className="list-group-item d-flex  ">
                              <div className="container-fluid">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">{item.dish}</div>
                                  <div className="col-1 text-nowrap">{item.amount}</div>
                                  <div className="col-1 text-nowrap">{item.cost}</div>
                                </div>
                              </div>
                            </li>
                            {/* <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">四季春+真波爺</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$45</div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">優多綠茶</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$45</div>
                                </div>
                              </div>
                            </li> */}
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                  </Accordion>
              </li>
            )})}
            </ul>
            {/* <ul className="list-group">
              <li className="list-group-item">
                  <div className="row d-flex align-items-center">
                    <div className="col-2">
                      <img
                        src="https://picsum.photos/150/110"
                        class="card-img-left"
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <h5 className="card-title h4 font-weight-bold">
                        50嵐(台中精誠店)
                      </h5>
                      <div className="card-text">
                        <p className="order_item h5">綠茶、紅茶</p>
                        <br />
                        <p className="order_date">2022年5月26日</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <p className="h3 text-nowrap">$140元</p>
                      </div>
                    </div>
                  </div>
                  <Accordion
                    style={{
                      borderTop: "1px solid black",
                      marginTop: "20px",
                      fontSize: "15px",
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="mt-3 font-weight-bold ">
                        <span>查看品項細節($4個品項)</span>
                        <span className="ml-2">
                          <i className="fa-solid fa-angles-down"></i>
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <ul className="list-group mt-4 ">
                            <div className="container">
                              <div className="row d-flex ">
                                <div className="col-10 ">品項</div>
                                <div className="col-1 text-nowrap">數量</div>
                                <div className="col-1 text-nowrap">金額</div>
                              </div>
                            </div>
                            <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">冰淇淋紅茶</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$50</div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">四季春+真波爺</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$45</div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">優多綠茶</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$45</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                  </Accordion>
              </li>
            </ul> */}

          </div>
          <div className="card" style={{ width: "60rem" }}>
            <div className="text-left h1 my-4">
              <h2>
                <i className="fa fa-dollar mr-4"></i>收益紀錄
              </h2>
            </div>
            <ul className="list-group">
            {this.state.sunsua_order.map((item, index) => {
              return (
              <li className="list-group-item" key={index}>
                  <div className="row d-flex align-items-center">
                    <div className="col-3">
                      <img
                        src={item.picUrl}
                        class="card-img-left"
                        style={{width:"100%"}}
                        alt="..."
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="card-title h4 font-weight-bold">
                      {item.meal}
                      </h5>
                      <div className="card-text">
                        <p className="order_item h5"> </p>
                        <br />
                        <p className="order_date">{item.setDate}</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <p className="h3 text-nowrap" >${item.count*item.freight}元</p>
                      </div>
                    </div>
                  </div>
                  <Accordion
                    style={{
                      borderTop: "1px solid black",
                      marginTop: "20px",
                      fontSize: "15px",
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="mt-3 font-weight-bold "
                      style={{fontSize:"22px"}}>
                        <span>查看明細({this.state.sunsua_order.length}條紀錄)</span>
                        <span className="ml-2">
                          <i class="fa-solid fa-angles-down"></i>
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <ul className="list-group mt-4 ">
                            <div className="container-fluid">
                              <div className="row d-flex ">
                                <div className="col-8 ">店家-品名</div>
                                <div className="col-1 text-nowrap ">數量</div>
                                <div className="col-1 text-nowrap">金額</div>
                              </div>
                            </div>
                            <li className="list-group-item d-flex  ">
                              <div className="container-fluid">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">{item.shop}-{item.meal}</div>
                                  <div className="col-1 text-nowrap">{item.amount}</div>
                                  <div className="col-1 text-nowrap">{item.cost}</div>
                                </div>
                              </div>
                            </li>
                            {/* <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">四季春+真波爺</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$45</div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">優多綠茶</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$45</div>
                                </div>
                              </div>
                            </li> */}
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                  </Accordion>
              </li>
              )})}
            </ul>
            {/* <ul className="list-group">
              <li className="list-group-item">
                  <div className="row d-flex align-items-center">
                    <div className="col-2">
                      <img
                        src="https://picsum.photos/150/110"
                        class="card-img-left"
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <h5 className="card-title h4 font-weight-bold">
                        50嵐(台中精誠店)
                      </h5>
                      <div className="card-text">
                        <p className="order_item h5">綠茶、紅茶</p>
                        <br />
                        <p className="order_date">2022年5月26日</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <p className="h3 text-nowrap" >$140元</p>
                      </div>
                    </div>
                  </div>
                  <Accordion
                    style={{
                      borderTop: "1px solid black",
                      marginTop: "20px",
                      fontSize: "15px",
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="mt-3 font-weight-bold ">
                        <span>查看品項細節($4個品項)</span>
                        <span className="ml-2">
                          <i class="fa-solid fa-angles-down"></i>
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <ul className="list-group mt-4 ">
                            <div className="container">
                              <div className="row d-flex ">
                                <div className="col-10 ">品項</div>
                                <div className="col-1 text-nowrap">數量</div>
                                <div className="col-1 text-nowrap">金額</div>
                              </div>
                            </div>
                            <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">冰淇淋紅茶</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$50</div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">四季春+真波爺</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$45</div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item d-flex  ">
                              <div className="container">
                                <div className="row d-flex text-left">
                                  <div className="col-10 ">優多綠茶</div>
                                  <div className="col-1 text-nowrap">1</div>
                                  <div className="col-1 text-nowrap">$45</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                  </Accordion>
              </li>
            </ul> */}

          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Order_record;
