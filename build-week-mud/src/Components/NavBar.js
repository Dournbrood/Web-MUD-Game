import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/core";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    
    return (
        <>
        <Button  ref={btnRef} variantColor="teal" onClick={onOpen}>
            Menu
        </Button>
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>MUD Menu</DrawerHeader>
        
                <DrawerFooter>
                    <NavLink to='/login'>
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