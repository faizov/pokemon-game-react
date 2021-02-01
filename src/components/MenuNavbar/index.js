import { useState } from 'react';

import Menu from '../Menu/';
import Navbar from '../Navbar/';

const MenuNavbar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <Menu open={open}/>
            <Navbar open={open} handleOpen={handleOpen}/>
        </>
    )
}

export default MenuNavbar;