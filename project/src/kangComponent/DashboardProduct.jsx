import React from "react";
import "../css/DashboardProduct.css";
// import { toast } from "react-toastify";

// import Panel from "component/Panel";
// import Editinventory from "component/Editinventory";

class DashboardProduct extends React.Component {
  //   toEdit = () => {
  //     Panel.open({
  //       component: Editinventory,
  //       props: {
  //         product: this.props.product,
  //         deleteProduct: this.props.delete,
  //       },
  //       callback: (data) => {
  //         console.log(data);
  //         if (data) {
  //           this.props.update(data);
  //         }
  //       },
  //     });
  //   };

  //   addCart = async () => {
  //     // addcart這是需要和資料庫溝通的功能
  //     // 把我們需要在購物車裡面需要的鮮解構出來
  //     try {
  //       const { id, name, image, price } = this.props.product;

  //       const res = await axios.get(`/carts?productId=${id}`); //json-server有官方說明寫法
  //       // 這邊採用異步方式
  //       const carts = res.data;
  //       if (carts && carts.length > 0) {
  //         const cart = carts[0];
  //         cart.mount += 1;
  //         await axios.put(`/carts/${cart.id}`, cart);
  //         // put是修改方法
  //       } else {
  //         // 這一部分是針對將相同商品富入購物車，不要重複寫入，去更新他的數量就好

  //         const cart = {
  //           productId: id,
  //           name,
  //           image,
  //           price,
  //           mount: 1 //需要預設值
  //         }; // 可以去看一下 起始值式空的
  //         // await axios.post("/carts", cart).then((res) => {
  //         await axios.post("/carts", cart);
  //       }
  //       // 位置是http://localhost:3004/carts  不要搞錯了
  //       toast.success("成功添加購物車");
  //       this.props.updateCartNum();
  //     } catch (error){
  //       toast.error('添加購物車失敗')
  //     } // try跟catch異步的報錯處理
  //   };
  state = {};

  render() {
    const { Name, Picture1, Description, delivercost } =
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
                <p>價格：{delivercost}</p>
              </div>
              <div className="prdt_add_to_cart text-right">
                <button type="button" className="btn btn-success btn-rounded">
                    <span className="icon edit-btn">
                      <i className="fas fa-sliders-h"></i>
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
