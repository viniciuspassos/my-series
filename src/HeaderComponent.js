import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'
import { Link } from 'react-router-dom'

const HeaderComponent = () =>{

    const [isOpen, setOpen] = useState(false)
    const toggle = () =>{
      setOpen(oldOpen => !oldOpen)
    }
  
    return (
      <Navbar color='light' light expand='md'>
        <div className='container'>
          <NavbarBrand tag={Link} to='/' style={{marginRight:"70%"}} >Minhas Séries</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink tag={Link} to='/series'> Series</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/generos'> Genêros</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  
  }

  export default HeaderComponent;