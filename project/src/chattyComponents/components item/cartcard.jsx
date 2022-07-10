import React, { Component } from 'react';
import $ from 'jquery';
import dish1 from '../imgs/shop1.jpg'

class Cartcard extends Component {
    state = { count:1, countsum:100, price:100} 

    // 餐點數量增加
    doPlusorder = (e) => {
        // console.log(e);
        // var tcount = e.target.closest('.orderbutton');
        // console.log(tcount);
        // var toutput = $(tcount).find('output').val();
        // console.log(toutput);
        this.setState({ count: this.state.count + 1 });
        this.setState({ price: this.state.price });
        this.setState({ countsum: this.state.count*this.state.price+this.state.price})
        
    }
    componentDidMount = () => {
        document.getElementById('sum').val = `${this.state.countsum} `;
    }

    // 餐點數量減少
    doDecreseorder = (e) => {
        // console.log(e);
        var tcount = e.target.closest('.orderbutton');
        // console.log(tcount);
        var toutput = parseInt($(tcount).find('output').val());
        // console.log(toutput);

        if (toutput === 1) {
            // window.confirm('you sure?');
            if (window.confirm("確定要移除餐點嗎？") === true) {
                alert('remove');
                // console.log(e.target.closest('.menutail'));
                e.target.closest('.menutail').remove();

              } else {
                alert('cancel');
              }
        }
        else {
            this.setState({ count: this.state.count - 1 })
            this.setState({ price: this.state.price });
            this.setState({ countsum: this.state.count*this.state.price-this.state.price})
        }
        
    }

    render() { 
        return (
            <React.Fragment>
                <div className='menutail row'>
                    {/* 點餐內容 */}
                    <div className='col-3 cart-food-sp sp1'>pic<img src={dish1} alt="" style={{height:'100%'}} /></div>
                    <div className='col-3 cart-food-sp sp2'>food1Name</div>
                    <div className='col-2 cart-food-sp'>price</div>

                    <div className='col-2 cart-food-sp'>
                        <div className='orderbutton'>
                            <button className='btn btn-danger'
                                onClick={this.doDecreseorder}>-</button>
                                <output>&nbsp;{this.state.count}&nbsp;</output>
                            <button className='btn btn-success'
                                onClick={this.doPlusorder}>+</button>
                            
                        </div>
                    </div>

                    <output className='col-2 cart-food-sp sp3' id='sum'>${this.state.countsum}</output>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Cartcard;