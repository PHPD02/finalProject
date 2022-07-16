import { useState } from "react";
import $ from "jquery";
import axios from 'axios';
// import "../App.css";
  
function App() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            // 成功回傳data
            success(data) {
                setResult(data);
            },
        });
    };

    const doClick = () => {

        // const text = $('#herew').text();
        // console.log(text);
        // axios
        //   .post("http://localhost:80/PHP/test/test.php", {text:'String1'})
        //   .then(function(body) {
        //     console.log(body.data);
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   });
        var params = {
            data1: 'string',
        }
        
        axios.post("http://localhost:80/PHP/test/test.php", params).then(function(response) {
            //code here 
            console.log(response);
        })
    }


  
    return (
        <div className="App">
            <form
                action="http://localhost:80/PHP/test/server.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>

            <button id="herew" onClick={doClick}>here</button>
        </div>
    );
}
  
export default App;