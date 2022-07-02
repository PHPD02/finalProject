import React from "react";
import axios from "./axios";
import { toast } from "react-toastify";

class ToDoEdit extends React.Component {
  state = {
    todoItem: {},
  };

  notify = () => {
    toast("Default Notification !");
  };

  async componentDidMount() {
    var url = `http://localhost:8000/todo/item/${this.props.match.params.id}`;
    var result = await axios.get(url);
    console.log(result);
    console.log(url);
    this.state.todoItem = result.data;
    this.setState({});
  }
  okButtonClick = async () => {
    // console.log(this.state.todoItem);
    var result = await axios.put(
      `http://localhost:8000/todo/item/`,
      this.state.todoItem
    );
    toast.success('修改成功');
    window.location = "#/TodoIndex";
  };
  todoItemNameChange = async (e) => {
    var newState = { ...this.state };
    newState.todoItem.Name = e.target.value;
    // newState.todoItem.Description = e.target.value;
    // newState.todoItem.Id = e.target.value;
    // newState.todoItem.Picture1 = e.target.value;
    this.setState(newState);
  };
  todoItemDescriptionChange = async (e) => {
    var newState = { ...this.state };
    newState.todoItem.Description = e.target.value;
    this.setState(newState);
  };
  render() {
    return (
      <div className="container" style={{ width: "70rem" }}>
        <h1 className="h1 my-4">品項修改</h1>
        <div className="p-5" style={{ border: "6px solid whitesmoke" }}>
          <input type="hidden" id="Id" name="Id" value="1" />
          <div className="form-group">
            <label htmlFor="itemName" className="h4">
              品項名稱
            </label>
            <textarea
              className="form-control mb-4"
              id="itemName"
              rows="2"
              value={this.state.todoItem.Name}
              onChange={this.todoItemNameChange}
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
              架上圖片
            </label>
            <img
              src={this.state.todoItem.Picture1}
              alt={this.state.todoItem.Name}
            ></img>
            <input
              type="file"
              className="form-control-file mb-4 justify-content-end"
              id="itemPicture"
              placeholder="重新選擇圖片"
              // value={this.state.todoItem.Picture1}這句會壞
              // onChange={this.todoItemTitleChange}
            ></input>
          </div>

          <div className="form-group float-right">
            <input
              type="submit"
              onClick={this.okButtonClick}
              value="確定"
              className="btn btn-outline-primary  btn-lg mr-3"
            />

            <a
              href="#/TodoIndex"
              className="btn btn-outline-info mr-5 btn-lg ml-1"
            >
              取消
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoEdit;
