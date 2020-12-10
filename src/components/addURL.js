import React, { useState } from 'react'

import URL from "./url"

export default function addURL(props) {
    const [url, setURL] = useState("")
    const [urlKey, setURLKey] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        fetch("http://127.0.0.1:5000/url/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                url: url
            })
        })
        .then(response => response.json())
        .then(data => {
            setURLKey(data)
            setURL("")
        })
        .catch(error => console.log("Error adding URL: ", error))
    }

   return (
       <div className='add-url-wrapper'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={url} 
                    onChange={event => setURL(event.target.value)}
                />
                <button type="submit">Add URL</button>
            </form>

            {urlKey ? <h3><URL url={urlKey} /></h3> : null}
       </div>
   )
}