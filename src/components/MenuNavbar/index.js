import { useState } from 'react';

import Menu from '../Menu/';
import Navbar from '../Navbar/';

const MenuNavbar = ({bgActive}) => {
    const [isOpen, setOpen] = useState(null)
    
    const handleOpen = () => {
        setOpen(prevState => !prevState)
    }
    return (
        <>
            <Menu isOpen={isOpen}/>
            <Navbar isOpen={isOpen} bgActive={bgActive} handleOpen={handleOpen}/>
        </>
    )
}

export default MenuNavbar;