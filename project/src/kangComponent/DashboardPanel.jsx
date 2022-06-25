import React from 'react';
import {render} from 'react-dom';
// import '../css/DashboardPanel.css'
class DashboardPanel extends React.Component {
  state = { 
    active:false,
    component: null,
    callback:()=>{},
   } 
   open =(options) =>{
    const {component, callback} = options;
    const _key = new Date().getTime();
    // 讓他每次裝載都可以重新渲染，不然打開關閉值會一直在
    const _component = React.createElement(component,{close:this.close, key:_key})
    // 直接調用component 他會是一個function，透過內建方法改造一下
    this.setState({
      active:true,
      component:_component,
      // 直接調用component 他會是一個function，透過內建方法改造一下
      callback:callback,
    });
   }
   close =(data) =>{
    this.setState({
      active:false,
    });
    this.state.callback(data)

   }


  render() { 
    const _class = {
      true:'panel-wrapper active',
      false:'panel-wrapper',
    }
    return (
      <div className={_class[this.state.active]}>
        <div className='over-layer' onClick={this.close}></div>
        <div className='panel'>
          <div className='head'>
            <span className='close' onClick={this.close}>X</span>
            {this.state.component}
          </div>
        </div>
      </div>
    );
  }
}
const _div =document.createElement('div')
document.body.appendChild(_div)
const _panel = render(<DashboardPanel/>,_div)
export default _panel;
