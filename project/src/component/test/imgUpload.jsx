import React, { Component } from 'react';
import axios from 'axios';

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
        const formData = new FormData();
        formData.append(
            "image",
            this.state.file,
        );

        // console.log(formData);
        // console.log(formData.getAll('image'));
        let url = "https://api.imgur.com/3/image";
        console.log(formData);

        /* 測試 1 */
        await axios.post(url, this.state.file, {
            headers: {
                "Accept": "*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                'Authorization': 'Client-ID 7b9a0d0b0e036c5'
            }
        })
            .then(res => {
                console.log("imgur post success");
                console.log(res);
                // this.state.proposalDetail.picUrl = res.data.link;
            })
            .catch(error => {
                console.log("imgur post failed");
                console.log("error:" + error.message);
            })
        console.log("finished");


        /* 測試2 */
        // axios({
        //     method: "post",
        //     headers: {
        //         'Authorization': 'Client-ID 7b9a0d0b0e036c5'
        //     },
        //     data: formData
        // })
        //     .then(res => {
        //         console.log("imgur post success");
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.log("imgur post failed");
        //         console.log("error:" + error.message);
        //     })


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