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
      <div >
        <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/' >Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar></Nav>
            <NavItem>
              <NavLink tag={Link} to='/generos'> Genêros</NavLink>
              <NavLink tag={Link} to='/generos/novo'> Cadastrar Genêro</NavLink>
            </NavItem>
        </Collapse>
        </Navbar>
      </div>
    );
  
  }

  export default HeaderComponent;