import React, { useState } from 'react'

export const Portal = (props) => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-9aee4itl4mda85i-io");
    myHeaders.append("Content-Type", "application/json");

    const user = props.user;

    const [goldPrice, setGoldPrice] = useState("");

    

    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    // console.log(requestOptions.headers)
    // fetch("https://www.goldapi.io/api/XAU/AUD", requestOptions)
    //     .then(response => response.text())
    //     .then(result => setGoldPrice(JSON.parse(result).open_price))
    //     .catch(error => console.log('error', error));

    return (
        <div className="container">

            <h1>{props.user ? "Name: " + user.name : "not signed in"}</h1>
            <h1>{props.user ? "Name: " + user.email : null}</h1>


        </div>
    )
}
