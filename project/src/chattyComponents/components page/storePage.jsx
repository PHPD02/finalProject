import React, { Component } from 'react';
import Axios from 'axios';
import StoreCard from '../components item/storeCards';

class StorePage extends Component {
    state = {
        menuList:[]
      }
    
      async componentDidMount() {
        // var result = await Axios.get("http://localhost:8000/todo/list");
        var result = await Axios.get("http://localhost/PHP/storeCards/getStoreItems.php");
        // this.state.todoList = result.data;
        // this.setState({});
        this.setState({
            menuList: result.data
        })
        console.log(this.state.menuList)
      }
    render() { 
        return (
            <div>
                {this.state.menuList.map((p) => {
                            return(
                                <div className="column is-3 col-5" key={p.menuItemId}>
                                    <StoreCard  
                                        StoreCard = {p} />
                                </div>
                            )
                            
                        })}
            </div>
        );
    }
}
 
export default StorePage;