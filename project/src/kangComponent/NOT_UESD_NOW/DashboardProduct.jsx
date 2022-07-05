import React from "react";
import "../css/DashboardProduct.css";
import DashboardPanel from "./DashboardPanel";
import AddInventary_tryifunctioncomponent from "./AddInventary_tryifunctioncomponent";
import EditInventory from "../EditInventaryy";

// import { toast } from "react-toastify";

// import Panel from "component/Panel";
// import Editinventory from "component/Editinventory";

class DashboardProduct extends React.Component {

  toEdit = () => {
    DashboardPanel.open({
      component: EditInventory,
      props: {
        product: this.props.product,
        deleteProduct: this.props.delete,
      },
      callback: (data) => {
        console.log(data);
        if (data) {
          this.props.update(data);
        }
      },
    });
  };
  delete = (id) => {
    const _products = this.state.products.filter((p) => p.id !== id);
    const _sProducts = this.state.sourceProduct.filter((p) => p.id !== id);
    this.setState({
      products: _products,
      sourceProduct: _sProducts,
    });
  };

  state = {};

  render() {
    const { Name, Picture1, Description, Id } =
      this.props.DashboardProduct;

    return (
      <div className="card alert">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="product-3-img">
              <img src={Picture1} alt={Name}></img>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="product_details_3">
              <div className="product_name">
                <h4>{Name}</h4>
              </div>
              <div className="product_des">
                <p>{Description}</p>
              </div>
              <div className="price mt-3">
                <p>價格：{Id}</p>
              </div>
              <div className="prdt_add_to_cart text-right">
                <button type="button" className="btn btn-success btn-rounded mr-2"
                onClick={this.toEdit}>
                    <span className="icon edit-btn">
                      <i className="fas fa-sliders-h"></i>
                    </span>
                </button>
                <button type="button" className="btn btn-danger btn-rounded"
                onClick={this.delete}>
                    <span className="icon edit-btn">
                      <i className="fas fa-trash"></i>
                    </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardProduct;
