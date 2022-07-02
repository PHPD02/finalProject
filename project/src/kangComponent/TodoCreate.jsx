import Axios from "axios";
import React from "react";
import { toast } from "react-toastify";

class ToDoCreate extends React.Component {
  state = {
    todoItem: {
      Id: "",
      Name: "",
      Description: "",
      Picture1: "",
    },
  };
  // async componentDidMount(){
  //     var url = `http://localhost:8000/todo/item/`;
  //     var result = await Axios.get(url);
  //     // console.log(result);
  // }

  yesBtn = async () => {
    await Axios.post(`http://localhost:8000/todo/create/`, this.state.todoItem);
    window.location = "#/TodoIndex";
    toast.success('建立品項成功')
  };
  todoItemTitleChange = async (e) => {
    var newState = { ...this.state };
    newState.todoItem.Name = e.target.value;
    this.setState(newState);
  };
  todoItemDescriptionChange = async (e) => {
    var newState = { ...this.state };
    newState.todoItem.Description = e.target.value;
    this.setState(newState);
  };
  render() {
    return (
      //   <div className="container">
      //     <h1>待辦事項清單 - 新增</h1>
      //     <hr />
      //     <div className="row">
      //       <div className="col-md-4">
      //         {/* <form action="/Todo/Create" method="post"> */}
      //           <div className="form-group">
      //             <label className="control-label" htmlFor="Name">
      //               項目名稱
      //             </label>
      //             <input
      //               className="form-control"
      //               type="text"
      //               id="Name"
      //               name="Name"
      //               value={this.state.todoItem.title}
      //               onChange={this.todoItemTitleChange}
      //             />
      //           </div>
      //           {/* <div className="form-group form-check">
      //             <label className="form-check-label">
      //               <input
      //                 className="form-check-input"
      //                 type="checkbox"
      //                 id="IsComplete"
      //                 name="IsComplete"
      //                 value=""
      //                 onChange={(e) => {
      //                   var newState = { ...this.state };
      //                   newState.todoItem.isComplete = e.target.checked;
      //                   this.setState(newState);
      //                 }}
      //               />{" "}
      //               是否已完工
      //             </label>
      //           </div> */}
      //           <div className="form-group">
      //             <input
      //               type="submit"
      //               value="確定"
      //               className="btn btn-outline-primary"
      //               onClick={this.yesBtn}
      //             />{" "}
      //             |
      //             <a href="#/TodoIndex" className="btn btn-outline-info">
      //               取消
      //             </a>
      //           </div>
      //         {/* </form> */}
      //       </div>
      //     </div>
      //   </div>
      <div className="container" style={{ width: "70rem" }}>
        <h1 className="h1 my-4">新增品項</h1>
        <div className="p-5" style={{ border: "6px solid whitesmoke" }}>
          <div className="form-group">
            <label htmlFor="itemName" className="h4">
              品項名稱
            </label>
            <textarea
              className="form-control mb-4"
              id="itemName"
              rows="2"
              value={this.state.todoItem.Name}
              onChange={this.todoItemTitleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="itemDescribe" className="h4 ">
              品項敘述
            </label>
            <textarea
              className="form-control mb-4"
              id="itemDescribe"
              rows="5"
              value={this.state.todoItem.Description}
              onChange={this.todoItemDescriptionChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="itemPrice" className="h4">
              售價
            </label>
            <input
              type="text"
              className="form-control mb-4"
              id="itemPrice"
              value={this.state.todoItem.Id}
              // onChange={this.todoItemTitleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="itemPicture" className="h4">
              選擇上傳圖片
            </label>
            {/* <img
              src={this.state.todoItem.Picture1}
              alt={this.state.todoItem.Name}
            ></img> */}
            <input
              type="file"
              className="form-control-file mb-4 justify-content-end"
              id="itemPicture"
              placeholder="重新選擇圖片"
              // value={this.state.todoItem.Picture1}
              // onChange={this.todoItemTitleChange}
            ></input>
          </div>

          <div className="form-group float-right ">
            <input
              type="submit"
              value="確定"
              className="btn btn-outline-primary btn-lg mr-3"
              onClick={this.yesBtn}
            />
            
            <a href="#/TodoIndex" className="btn btn-outline-info mr-5 btn-lg ml-1">
              取消
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoCreate;
