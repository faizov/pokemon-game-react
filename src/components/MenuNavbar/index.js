import { useState } from 'react';

import Menu from '../Menu/';
import Navbar from '../Navbar/';

const MenuNavbar = ({pages}) => {
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
    }
    return (
        <>
            <Menu open={isOpen} pages={pages}/>
            <Navbar open={isOpen} handleOpen={handleOpen}/>
        </>
    )
}

export default MenuNavbar;