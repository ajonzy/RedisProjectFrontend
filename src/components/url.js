import React, { useState, useEffect } from 'react'

export default function url(props) {
    const [url, setURL] = useState("#")

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/url/get/${props.url}`)
        .then(response => response.json())
        .then(data => setURL(data))
        .catch(error => console.log(`Error fetching ${url} URL: `, error))
    })

   return (
       <a href={url} target="_blank">
            http://127.0.0.1:5000/{props.url}
       </a>
   )
}