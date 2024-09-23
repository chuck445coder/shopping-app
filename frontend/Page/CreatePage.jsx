import { Box, Button, Container, Heading, useColorMode, useColorModeValue, VStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../Store/product.js'
const CreatePage = () => {
  const [newProduct, setNewProduct ]  = useState({
    name: "",
    price: "",
    image: ""
  })
  
   const { createProduct } = useProductStore()

  const handleAddProduct =  async () => {
    const { success, message} = await createProduct(newProduct)
    console.log("success: ", success)
    console.log("message: " + message)
  }
  return (
    <Container maxW={"container.sm"}>
      <VStack>
        <Heading as={"h1"}>
          Create New Product
        </Heading>

        <Box
          w={"full"} bg={useColorModeValue("white", "grey.500")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack
            spacing={8}
          >
            <Input
              placeholder='Product name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <Input
              placeholder='Price'
              name='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />

            <Input
              placeholder='Image URl'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button w={"full"} colorScheme={"blue"} onClick={handleAddProduct}>Add</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage