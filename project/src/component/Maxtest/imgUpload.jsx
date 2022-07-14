import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

class ImgUpload extends Component {
    state = { file: null }
    fileSel = (e) => {
        console.clear();
        this.state.file = e.target.files[0];
        console.log(this.state.file);
        this.setState({});
    }
    stateChk = () => {
        console.log(this.state);
    }
    imgUpload = async () => {
        console.clear();
        let imgUrl = "";
        const formData = new FormData();
        formData.append(
            "image",
            this.state.file,
        );

        // let url = "https://api.imgur.com/3/image";
        let res = await $.post({
            url: "https://api.imgur.com/3/image",
            async: true,
            crossDomain: true,
            method: 'POST',
            headers: {
                'Authorization': 'Client-ID 7b9a0d0b0e036c5',
            },
            processData: false,
            contentType: false,
            mimeType: 'multipart/form-data',
            data: formData,
        })
            .then(res => {
                console.log("success");
                // console.log(res);
                let temp = JSON.parse(res);
                // console.log(typeof (temp));
                // console.log(temp.data);
                imgUrl = temp.data.link;
            })
            .catch(err => {
                console.log("failed");
                console.log(err);
            })
        console.log(imgUrl);
    }


    render() {
        return (
            <>
                <button onClick={this.stateChk}> chk state</button>
                <div>
                    <input type="file" onChange={this.fileSel} />
                    <button onClick={this.imgUpload}>upload</button>
                </div>
            </>

        );
    }
}

export default ImgUpload;