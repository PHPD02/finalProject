import React, { Component } from 'react';
import "./styles.css";
import axios from 'axios'

class PhpTest extends Component {
    state = {
        name: '',
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }
    FormSubmittionHandler = async (event) => {
        console.clear();
        event.preventDefault();
        let url = 'http://localhost/test/test.php';
        await axios.post(url, this.state)
            .then(res => {
                console.log("success");
            })
            .catch(error => {
                console.log("error");
                console.log(error.message);
            });

        /* TODO: 有時間試著改寫下面的 */
        // axios({
        //     method: 'post',
        //     url: `${PATH}`,
        //     headers: { 'content-type': 'application/json' },
        //     data: this.state.name
        // })
        //     .then(result => {
        //         console.log("success");
        //         this.setState({
        //             sent: result.data.sent
        //         })
        //     })
        //     .catch(error => {
        //         console.log("error");
        //         this.setState({ error: error.message })
        //     });
    }
    render() {
        return (
            <div className="App">
                <h1>Contact Me</h1>
                <button onClick={() => { console.log(this.state) }}>state chk</button>
                <div className="container">
                    <form action="#" encType="multipart/form-data">
                        <label>Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name.."
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        <br />
                        <input type="submit" value="Submit" onClick={e => this.FormSubmittionHandler(e)} />
                    </form>
                </div>
            </div>
        );
    }
}

export default PhpTest;
