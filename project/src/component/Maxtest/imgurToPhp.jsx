/**
 * 【可以work】
 * 圖片轉成url
 */
import React, { Component } from 'react';
import axios from 'axios';

class ImgurToPhp extends Component {
    state = {
        file: null
    }
    fileSel = (e) => {
        console.log()
        this.state.file = e.target.files[0]
    }
    imgUpload = async () => {
        console.clear();
        let url = "http://localhost/finalProject_php/imgur/picToUrl.php";
        var formData = new FormData();
        formData.append("image", this.state.file);
        let result = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }
    render() {
        return (
            <>
                <input type="file" onChange={this.fileSel} />
                <br />
                <button onClick={this.imgUpload}> upload</button>
            </>
        );
    }
}

export default ImgurToPhp;