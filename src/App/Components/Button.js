import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({color,url,content}) =>(
    <Link
    className={`btn ${color}`}
    to={url}
    >
     {content}
    </Link>
)

export default Button
