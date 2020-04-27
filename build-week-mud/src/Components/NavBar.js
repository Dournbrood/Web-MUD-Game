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
    useDisclosure
} from "@chakra-ui/core";

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    
    return (
        <>
        <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
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
                    <Button variant="outline" mr={3} onClick={onClose}>
                    Log In
                    </Button>
                    <Button variant="outline" mr={3} onClick={onClose}>
                    Sign Up
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    );
}

export default NavBar