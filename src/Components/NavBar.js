import React from 'react'
import {
    Drawer,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/core";
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    
    return (
        <>
        <Button  ref={btnRef} variantColor="teal" onClick={onOpen}>
            <FaBars />
        </Button>
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>MUD Menu</DrawerHeader>
        
                <DrawerFooter>
                    <NavLink to='/'>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Log In
                        </Button>
                    </NavLink>
                    <NavLink to='/register'>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Sign Up
                        </Button>
                    </NavLink>
                    <NavLink to='/map'>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Map
                        </Button>
                    </NavLink>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    );
}

export default NavBar