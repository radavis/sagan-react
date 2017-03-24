import React from 'react'

let Link = ({title, url, description}) => (
  <div>
    <a href={url}>
      { title || url }
    </a>
    <p>
      { description }
    </p>
  </div>
)

export default Link
