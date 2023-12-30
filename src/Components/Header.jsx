import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to='/'>
            <img src='/assets/images/logo1.png' alt='logoImg' className="logo"/>
        </NavLink>
        <Navbar/>
    </MainHeader>
  ) 
}


const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme })  => theme.colors.bg };
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo{
    height: 5rem;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    
.logo{
    height: 4rem;
}
}
`;

export default Header
