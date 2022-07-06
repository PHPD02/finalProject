import React from "react";
// import Restaurant from "./restaurant";
// import "../css/foodpandapage.css";
// import DashboardProduct from "./NOT_UESD_NOW/DashboardProducthboardProduct";
// import DashboardPanel from "./NOT_UESD_NOW/DashboardPanel";
// import '../css/DashboardPanel.css';
import '../css/DashboardProduct.css';
// import AddInventary from './AddInventary';
import axios from "./axios";



class TodoIndex extends React.Component {
  state = {
    todoList: [],
  };

  async componentDidMount() {
    var result = await axios.get("http://localhost:8000/todo/list");
    this.setState({ todoList: result.data });
  }

  render() {
    return (
<div className="container">
  <h1 className="h1 my-4">
    菜單品項
    <a href="/Todo/Create" className=" btn btn-primary btn-lg float-right">
      新增品項
    </a>
  </h1>
  <div className="main-content">
    <div className="row">
      {this.state.todoList.map((item, index) => {
        return (
          <div className="col-lg-4" key={index}>
            {/* 這key值需要提供，但還是能跑 */}
            <div className="card alert ">
              <div className="row align-items-center card-body">
                <div className="col-lg-5">
                  <div className="product-3-img">
                    <img src={item.Picture1} alt={item.Name}></img>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="product_details_3">
                    <div className="product_name">
                      <h4 className="item_Name">{item.Name}</h4>
                    </div>
                    <div className="product_des">
                      <p>{item.Description}</p>
                    </div>
                    <div className="price mt-3">
                      <p>價格：{item.Id}</p>
                    </div>
                    <div className="prdt_add_to_cart text-right">
                      <a
                        href={`/Todo/Edit/${item.Id}`}
                        className="btn btn-success btn-rounded mr-2"
                      >
                        <span className="icon edit-btn">
                          <i className="fas fa-sliders-h"></i>
                        </span>
                      </a>

                      {/* <button
                        type="button"
                        className="btn btn-success btn-rounded mr-2"
                        onClick={this.toEdit}
                      >
                        <span className="icon edit-btn">
                          <i className="fas fa-sliders-h"></i>
                        </span>
                      </button> */}

                      {/* <button
                        type="button"
                        className="btn btn-danger btn-rounded"
                        onClick={this.delete}
                      >
                        <span className="icon edit-btn">
                          <i className="fas fa-trash"></i>
                        </span>
                      </button> */}
                      <a
                        href={`/Todo/Delete/${item.Id}`}
                        className="btn btn-danger btn-rounded mr-2"
                      >
                        <span className="icon edit-btn">
                          <i className="fas fa-trash"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

    );
  }
}

export default TodoIndex;
