import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "A modern smartphone with a sleek design.",
    price: "$699",
    image: "/images/sample-product-1.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "A high-end laptop with a minimalist design.",
    price: "$1299",
    image: "/images/sample-product-2.jpg",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "A pair of wireless earbuds with a compact charging case.",
    price: "$199",
    image: "/images/sample-product-3.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link to="/">ElectroShop</Link>
        </Heading>
        <Box>
          <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
          <Link to="/products">Products</Link>
        </Box>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" bg="brand.900" color="white" p={4} textAlign="center">
        <Text>Contact us: contact@electroshop.com</Text>
      </Box>
    </Container>
  );
};

export default Index;