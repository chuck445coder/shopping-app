import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Text, Flex, HStack, Center, useColorMode } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import {IoMoon} from 'react-icons/io5'
import {LuSun} from 'react-icons/lu'


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row"
                 
                }}
            >



                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight='extrabold'
                   // alignItems={"center"}
                >
                    <Link to={"/"}>Product Store</Link>
                </Text>

                <HStack spacing={2}  >
                    <Link to={"/create"}>
                        <Button >
                            <PlusSquareIcon fontSize={20}></PlusSquareIcon>
                        </Button>
                    </Link>

                    <Button onClick= {toggleColorMode} >
                        {colorMode === "light"? <IoMoon/> : <LuSun/>}
                    </Button>
                </HStack>

            </Flex>
        </Container>
    )
}

export default Navbar