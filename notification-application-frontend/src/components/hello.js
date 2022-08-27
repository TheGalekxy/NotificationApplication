import { React, useEffect, useState } from 'react';

export const Hello = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/api/sendToFrontend').then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(jsonResponse => setInitialState(jsonResponse.hello));

        // fetch('/api/').then(response => {
        //     if (response.ok) {
        //         return response;
        //     }
        // }).then(response => console.log(response));

        // fetch('/api/hello').then(response => {
        //     if (response.ok) {
        //         return response;
        //     }
        // }).then(response => console.log(response.secondHello));
    },[])

    function buttonOnClick() {
        console.log("I am clicking the button");
        fetch('/sms/').then(response => {
            if (response.ok) {
                console.log(response, "response");
                return response
            }
        }).then(response => console.log(response, 'response 2'));
    }

    return(
        <div>
            <button onClick={buttonOnClick}>This is a button</button>
            <div>
                {initialState.length > 0 && initialState.map((item, i) => <p key={i}>{item}</p>)}
            </div>
        </div>
    )
}