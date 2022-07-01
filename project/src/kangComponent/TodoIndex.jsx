import React from "react";
import Restaurant from "./restaurant";
import "../css/foodpandapage.css";
import DashboardProduct from "./DashboardProduct";
import DashboardPanel from "./DashboardPanel";
import '../css/DashboardPanel.css';

import AddInventary from './AddInventary';
import axios from "./axios";


// class DashboardProducts extends React.Component {
//   state = {
//     DashboardProduct: [],
//   };


//   componentDidMount() {
//     // fetch("http://localhost:3005/restaurant")
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     this.setState({
//     //       DashboardProduct: data,
//     axios.get('/restaurant').then((response)=>{
//       this.setState({
//         DashboardProduct:response.data
//       })
//     })

//   }

//   addProduct=() =>{
//     DashboardPanel.open({
//       component: AddInventary,
//       //試試記得改
//       callback:(data)=>{
//         console.log('Product Data:',data)
//         if (data) {
//           this.add(data);
//         }
//       }
//     });
//   }
//   render() {




//     return (
//       <div>
//         <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
//           <div className="nano">
//             <div className="nano-content">
//               <ul>
//                 <li>
//                   <a className="sidebar-sub-toggle">
//                     <i className="ti-bar-chart-alt"></i> 儀錶板
//                     <span className="sidebar-collapse-icon ti-angle-down"></span>
//                   </a>
//                   <ul>
//                     <li>
//                       <a href="#">1</a>
//                     </li>
//                     <li>
//                       <a href="#">2</a>
//                     </li>
//                     <li>
//                       <a href="#">3</a>
//                     </li>
//                     <li>
//                       <a href="#">4</a>
//                     </li>
//                     <li>
//                       <a href="#">5</a>
//                     </li>
//                     <li>
//                       <a href="#">6</a>
//                     </li>
//                     <li>
//                       <a href="#">7</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="ti-calendar"></i> 行事曆
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="ti-email"></i> Email
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="ti-user"></i> Profile
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="ti-layout-grid2-alt"></i> Widget
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="header">
//           <div className="pull-left">
//             <div className="logo">
//               <a href="index.html">
//                 <span>後臺管理</span>
//               </a>
//             </div>
//             <div className="hamburger sidebar-toggle">
//               <span className="line"></span>
//               <span className="line"></span>
//               <span className="line"></span>
//             </div>
//           </div>
//           <div className="pull-right p-r-15">
//             <ul>
//               <li className="header-icon dib">
//                 <a href="#">
//                   <i className="ti-search"></i>
//                 </a>
//               </li>
//               <li className="header-icon dib">
//                 <i className="ti-bell"></i>
//                 <div className="drop-down">
//                   <div className="dropdown-content-heading">
//                     <span className="text-left">通知</span>
//                   </div>
//                   <div className="dropdown-content-body">
//                     <ul>
//                       <li>
//                         <a href="#">
//                           <div className="notification-content">
//                             <small className="notification-timestamp pull-right">
//                               02:34 PM
//                             </small>
//                             <div className="notification-heading">康大哥</div>
//                             <div className="notification-text">
//                               新增一筆訂單
//                             </div>
//                           </div>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <div className="notification-content">
//                             <small className="notification-timestamp pull-right">
//                               02:34 PM
//                             </small>
//                             <div className="notification-heading">康大哥</div>
//                             <div className="notification-text">
//                               新增一筆訂單
//                             </div>
//                           </div>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <div className="notification-content">
//                             <small className="notification-timestamp pull-right">
//                               02:34 PM
//                             </small>
//                             <div className="notification-heading">康大哥</div>
//                             <div className="notification-text">
//                               新增一筆訂單
//                             </div>
//                           </div>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <div className="notification-content">
//                             <small className="notification-timestamp pull-right">
//                               02:34 PM
//                             </small>
//                             <div className="notification-heading">康大哥</div>
//                             <div className="notification-text">
//                               新增一筆訂單
//                             </div>
//                           </div>
//                         </a>
//                       </li>
//                       <li className="text-center">
//                         <a href="#" className="more-link">
//                           查看全部
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li className="header-icon dib">
//                 <i className="ti-email"></i>
//                 <div className="drop-down">
//                   <div className="dropdown-content-heading">
//                     <span className="text-left">2 封新訊息</span>
//                     <a href="email.html">
//                       <i className="ti-pencil-alt pull-right"></i>
//                     </a>
//                   </div>
//                   <div className="dropdown-content-body">
//                     <ul>
//                       <li className="notification-unread">
//                         <a href="#">
//                           <div className="notification-content">
//                             <small className="notification-timestamp pull-right">
//                               02:34 PM
//                             </small>
//                             <div className="notification-heading">康大哥</div>
//                             <div className="notification-text">
//                               你好 我的薯條要切不要辣
//                             </div>
//                           </div>
//                         </a>
//                       </li>
//                       <li className="notification-unread">
//                         <a href="#">
//                           <div className="notification-content">
//                             <small className="notification-timestamp pull-right">
//                               02:34 PM
//                             </small>
//                             <div className="notification-heading">康大哥</div>
//                             <div className="notification-text">
//                               你好 我的薯條要切不要辣
//                             </div>
//                           </div>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <div className="notification-content">
//                             <small className="notification-timestamp pull-right">
//                               02:34 PM
//                             </small>
//                             <div className="notification-heading">康大哥</div>
//                             <div className="notification-text">
//                               你好 我的薯條要切不要辣
//                             </div>
//                           </div>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <div className="notification-content">
//                             <small className="notification-timestamp pull-right">
//                               02:34 PM
//                             </small>
//                             <div className="notification-heading">康大哥</div>
//                             <div className="notification-text">
//                               你好 我的薯條要切不要辣
//                             </div>
//                           </div>
//                         </a>
//                       </li>
//                       <li className="text-center">
//                         <a href="#" className="more-link">
//                           See All
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li className="header-icon dib">
//                 <img
//                   className="avatar-img"
//                   src="assets/images/avatar/1.jpg"
//                   alt=""
//                 />
//                 <span className="user-avatar">
//                   康大哥歌 <i className="ti-angle-down f-s-10"></i>
//                 </span>
//                 <div className="drop-down dropdown-profile">
//                   <div className="dropdown-content-heading">
//                     <span className="text-left"> 簽約成特約店家</span>
//                     <p className="trial-day">抽成數可減至0</p>
//                   </div>
//                   <div className="dropdown-content-body">
//                     <ul>
//                       <li>
//                         <a href="#">
//                           <i className="ti-user"></i> <span>店家資訊</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="ti-wallet"></i> <span>店家收益</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="ti-write"></i> <span>重要通知</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="ti-settings"></i> <span>設定</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="ti-help-alt"></i> <span>聯絡官方</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="ti-power-off"></i> <span>登出</span>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="content-wrap">
//           <div className="main">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-lg-12 p-r-0 title-margin-right">
//                   <div className="page-header">
//                     <div className="page-title">
//                       <h1>
//                         八方雲集(新店區新店店) <span>歡迎使用</span>
//                       </h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="main-content">
//                 <div className="row">
//                   <div className="col-lg-4">
//                     <div className="card alert">
//                       <div className="row">
//                         <div className="col-lg-4">
//                           <div className="product-3-img">
//                             <img
//                               src="assets/images/product_1/image-8-226x223.jpg"
//                               alt=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-8">
//                           <div className="product_details_3">
//                             <div className="product_name">
//                               <h4>鍋貼水窖臭豆腐</h4>
//                             </div>
//                             <div className="product_des">
//                               <p>我是好吃</p>
//                             </div>
//                             <div className="prdt_add_to_cart">
//                               <button
//                                 type="button"
//                                 className="btn btn-success btn-rounded"
//                               >
//                                 修改資訊
//                               </button>
//                               <button
//                                 type="button"
//                                 className="btn btn-primary btn-rounded m-l-10"
//                               >
//                                 刪除菜單
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-4">
//                     <div className="card alert">
//                       <div className="row">
//                         <div className="col-lg-4">
//                           <div className="product-3-img">
//                             <img
//                               src="assets/images/product_1/image-8-226x223.jpg"
//                               alt=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-8">
//                           <div className="product_details_3">
//                             <div className="product_name">
//                               <h4>鍋貼水窖臭豆腐</h4>
//                             </div>
//                             <div className="product_des">
//                               <p>我是好吃</p>
//                             </div>
//                             <div className="prdt_add_to_cart">
//                               <button
//                                 type="button"
//                                 className="btn btn-success btn-rounded"
//                               >
//                                 修改資訊
//                               </button>
//                               <button
//                                 type="button"
//                                 className="btn btn-primary btn-rounded m-l-5"
//                               >
//                                 刪除菜單
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-4">
//                     <div className="card alert">
//                       <div className="row">
//                         <div className="col-lg-4">
//                           <div className="product-3-img">
//                             <img
//                               src="assets/images/product_1/image-8-226x223.jpg"
//                               alt=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-8">
//                           <div className="product_details_3">
//                             <div className="product_name">
//                               <h4>鍋貼水窖臭豆腐</h4>
//                             </div>
//                             <div className="product_des">
//                               <p>我是好吃</p>
//                             </div>
//                             <div className="prdt_add_to_cart">
//                               <button
//                                 type="button"
//                                 className="btn btn-success btn-rounded"
//                               >
//                                 修改資訊
//                               </button>
//                               <button
//                                 type="button"
//                                 className="btn btn-primary btn-rounded m-l-5"
//                               >
//                                 刪除菜單
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="main-content" >
//                 <div className="row">

//                     {this.state.DashboardProduct.map((r) => {
//                       return (
//                         <div className="col-lg-4" key={r.Id}>
//                           {/* 這key值需要提供，但還是能跑 */}
//                           <DashboardProduct DashboardProduct={r} />
//                           {/* // 我適用props傳遞方式不是用state */}
//                         </div>
//                       );
//                     })}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className="btn btn-primary  addproduct" onClick={this.addProduct}>添加商品</button>
//       </div>
//     );
//   }
// }

// export default DashboardProducts;


// class DashboardProducts extends React.Component {
//   state = {
//     todoList: [],
//   };

//   async componentDidMount() {
//     var result = await axios.get("http://localhost:8000/menu/list");
//     this.setState({ todoList: result.data });
//   }

//   render() {
//     return (
//       <div class="container">
//         <h1>
//           待辦事項清單
//           <a
//             href="/#/menu/Create"
//             class="btn btn-outline-success btn-md float-right"
//           >
//             新增
//           </a>
//         </h1>

//         <table class="table table-striped table-hover">
//           <thead>
//             <tr>
//               <th>項目名稱</th>
//               <th>是否已完工</th>
//               <th>&nbsp;</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.todoList.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.Name}</td>
//                 <td>
//                   <input
//                     className="check-box"
//                     type="text"
//                     value={item.Name}
//                   />
//                 </td>
//                 <td>
//                   <span className="float-right">
//                     <a
//                       href={`#/menu/Edit/${item.Id}`}
//                       className="btn btn-outline-primary btn-sm"
//                     >
//                       編輯
//                     </a>
//                     |&nbsp;
//                     <a
//                       href={`#/menu/Delete/${item.Id}`}
//                       className="btn btn-outline-danger btn-sm"
//                     >
//                       刪除
//                     </a>
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default DashboardProducts;


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
//       <div class="container">
//         <h1>
//           待辦事項清單
//           <a
//             href="#/Todo/Create"
//             class="btn btn-outline-success btn-md float-right"
//           >
//             新增
//           </a>
//         </h1>
// {/* -------------------- */}
//         <table class="table table-striped table-hover">
//           <thead>
//             <tr>
//               <th>項目名稱</th>
//               <th>是否已完工</th>
//               <th>&nbsp;</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.todoList.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.Name}</td>
//                 <td>
//                   <input
//                     className="text"
//                     disabled="disabled"
//                     type="text"
//                     value={item.Description}
//                   />
//                 </td>
//                 <td>
//                   <span className="float-right">
//                     <a
//                       href={`#/Todo/Edit/${item.Id}`}
//                       className="btn btn-outline-primary btn-sm"
//                     >
//                       編輯
//                     </a>
//                     |&nbsp;
//                     <a
//                       href={`#/Todo/Delete/${item.Id}`}
//                       className="btn btn-outline-danger btn-sm"
//                     >
//                       刪除
//                     </a>
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>



//       </div>
<div class="container">
  <h1 className="h1 my-4">
    菜單品項
    <a href="#/Todo/Create" class=" btn btn-primary btn-md float-right">
      新增
    </a>
  </h1>
  <div className="main-content">
    <div className="row">
      {this.state.todoList.map((item, index) => {
        return (
          <div className="col-lg-4" key={index}>
            {/* 這key值需要提供，但還是能跑 */}
            <div className="card alert">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="product-3-img">
                    <img src={item.Picture1} alt={item.Name}></img>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="product_details_3">
                    <div className="product_name">
                      <h4>{item.Name}</h4>
                    </div>
                    <div className="product_des">
                      <p>{item.Description}</p>
                    </div>
                    <div className="price mt-3">
                      <p>價格：{item.Id}</p>
                    </div>
                    <div className="prdt_add_to_cart text-right">
                      <a
                        href={`#/Todo/Edit/${item.Id}`}
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
                        href={`#/Todo/Delete/${item.Id}`}
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
