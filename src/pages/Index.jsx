import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Graphic Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1621446510964-c175aeb4fc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZ3JhcGhpYyUyMHRlZXxlbnwwfHx8fDE3MTE2NjE1NTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1525199078165-69ce4f553361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwaG9vZGllfGVufDB8fHx8MTcxMTY2MTU1OXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1519256155806-cd510524ed97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwc25lYWtlcnN8ZW58MHx8fHwxNzExNjYxNTU5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Joggers",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527181260677-e6943cf5738f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwam9nZ2Vyc3xlbnwwfHx8fDE3MTE2NjE1NTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Box>
      <Flex bg="gray.100" p={4} alignItems="center">
        <Heading size="xl">Streetwear Store</Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" onClick={onOpen}>
          <Badge ml={1} colorScheme="red">
            {cart.length}
          </Badge>
        </IconButton>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading size="md">{product.name}</Heading>
              <Text mt={2} fontWeight="bold">
                ${product.price}
              </Text>
              <Button mt={4} colorScheme="blue" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>
            <DrawerBody>
              {cart.map((item) => (
                <Flex key={item.id} alignItems="center" mb={4}>
                  <Image src={item.image} alt={item.name} boxSize="100px" objectFit="cover" mr={4} />
                  <Box>
                    <Heading size="sm">{item.name}</Heading>
                    <Text fontWeight="bold">${item.price}</Text>
                    <Button size="xs" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </Box>
                </Flex>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Index;
