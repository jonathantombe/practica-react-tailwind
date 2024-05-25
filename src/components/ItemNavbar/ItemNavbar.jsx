import React from 'react'

import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({ route, content }) => <li><NavLink className='anchor-header' to={route}>{content}</NavLink></li>
