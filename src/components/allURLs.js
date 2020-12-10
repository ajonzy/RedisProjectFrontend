import React, { useState, useEffect } from 'react'

import URL from "./url"

export default function allURLs(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/url/get")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log("Error getting URLs: ", error))
    }, [])

   return (
       <div className='all-urls-wrapper'>
           {data.map(url => <h3 key={url}><URL url={url} /></h3>)}
       </div>
   )
}