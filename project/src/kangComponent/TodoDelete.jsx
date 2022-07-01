import React from "react";
import axios from "axios";

class ToDoDelete extends React.Component {
  state = {
    todoItem: {},
  };
  async componentDidMount() {
    var url = `http://localhost:8000/todo/item/${this.props.match.params.id}`;
    var result = await axios.get(url);
    this.state.todoItem = result.data;
    this.setState({});
  }
  okDelete = async () => {
    await axios.delete(
      `http://localhost:8000/todo/delete/${this.state.todoItem.Id}`
    );
    window.location = "#/TodoIndex";
  };

  render() {
    return (
      <div className="container" style={{ width: "70rem" }}>
        <h1 className="h1 my-4">確認刪除</h1>
        <div className="p-5" style={{ border: "6px solid whitesmoke" }}>
          <div className="form-group">
            <label  className="h4">
              品項名稱
            </label>
            <div
              className="form-control mb-4"
            >{this.state.todoItem.Name}</div>
          </div>
          <div className="form-group">
            <label  className="h4 ">
              品項敘述
            </label>
            <div
              className="form-control mb-4"
            >{this.state.todoItem.Description}</div>
          </div>
          <div className="form-group">
            <label  className="h4">
              售價
            </label>
            <idiv
              type="text"
              className="form-control mb-4"
            >{this.state.todoItem.Id}</idiv>
          </div>
          <div className="form-group">
            <label htmlFor="itemPicture" className="h4">
              架上圖片
            </label>
            <img
              src={this.state.todoItem.Picture1}
              alt={this.state.todoItem.Name}
            ></img>
          </div>
          <hr style={{marginTop:'60px'}}/>
          <h3 className="text-center h4 my-4">確定要刪除這筆資料嗎?</h3>
          <div className="form-group text-center">

          <input type="hidden" id="TodoItemId" name="TodoItemId" value="1" />
          <input
            type="submit"
            onClick={this.okDelete}
            value="確定"
            className="btn btn-outline-danger btn-lg mr-3"
          />
        
          <a href="#/TodoIndex" className="btn btn-outline-info btn-lg ml-1">
            取消
          </a>
          </div>
        </div>
      </div>

      //   <div className="container">
      //     <h1>待辦事項清單 - 刪除</h1>

      //     <hr />
      //     <div>
      //       <dl className="row">
      //         <dt className="col-sm-2">項目名稱</dt>
      //         <dd className="col-sm-10">{this.state.todoItem.title}</dd>
      //         <dt className="col-sm-2">是否已完工</dt>
      //         <dd className="col-sm-10">
      //           <input
      //             className="check-box"
      //             disabled="disabled"
      //             type="checkbox"
      //             checked={this.state.todoItem.isComplete}
      //           />
      //         </dd>
      //       </dl>
      //       <hr />
      //       <h3>確定要刪除這筆資料嗎?</h3>
      //       <input type="hidden" id="TodoItemId" name="TodoItemId" value="1" />
      //       <input
      //         type="submit"
      //         onClick={this.okDelete}
      //         value="確定"
      //         className="btn btn-outline-danger"
      //       />
      //       |
      //       <a href="#/TodoIndex" className="btn btn-outline-info">
      //         取消
      //       </a>
      //     </div>
      //   </div>11111
    );
  }
}
export default ToDoDelete;
