import React, { Component } from 'react';
class Card extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className='container pt-2'>
          <svg className="bd-placeholder" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect></svg>
          <div>
            <span>名稱</span> <span>評價</span>
            <p>介紹</p>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default Card;