import React from "react";
import PlacesAutocomplete from "./js/AutoCompleteLocation";
import "../css/foodpandapage.css";

class SearchBar extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex searchBox"
          // style={{
          //   maxWidth: "900px",
          //   height: "120PX",
          //   boxShadow: "3px 3px 15px grey ",
          // }}
        >
          <div className="input-group d-flex  justify-content-between">
            {/* <input
                type="text"
                className="form-control m-2"
                placeholder="輸入您欲送達的位置"
                style={{
                  height: "70px",
                  Width: "600px",
                  borderRadius: "10px",
                  outline:"none",
                }}
              /> */}
            <PlacesAutocomplete />
            <div
              className="input-group-append mr-5"
              style={{ position: "absolute", right: "10px" }}
            >
              <i
                className="fa fa-location mr-3"
                style={{
                  zIndex: "1",
                  cursor: "pointer",
                  lineHeight: "70px",
                  fontSize: "20px",
                }}
                id="locate_btn"
              ></i>
              <button
                className="btn  m-2"
                type="button"
                style={{
                  height: "60px",
                  width: "100px",
                  borderRadius: "30px",
                  background: "#0093E9",
                  backgroundImage:
                    "linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)",
                  color: "white",
                  textShadow: "1px 1px black"


                }}
              >
                外送
              </button>
              {/* <span style={{ margin: "auto auto" }}>或</span>
              <button
                className="btn btn-danger m-2"
                type="button"
                style={{ height: "60px", width: "100px", borderRadius: "10px" }}
              >
                外帶自取
              </button> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
