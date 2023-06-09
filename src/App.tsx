import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar'
import { Container, Box } from '@chakra-ui/react';
import CreateProduct from './pages/CreateProduct/CreateProductPage';
import CheckoutHistoryPage from './pages/CheckoutHistory/CheckoutHistoryPage';
import POS from './pages/POS/POS';
import { CartProvider } from './components/CartContext';

export default function App() {
  return (
    <Box minH="100vh" bg="gray.100">
      <Router>
        <NavBar />
        <Container maxW="100%" >
          <CartProvider>
            <Routes>
              <Route path="/" element={<POS />} />
              <Route path="/new" element={<CreateProduct />} />
              <Route path="/history" element={<CheckoutHistoryPage />} />
            </Routes>
          </CartProvider>
        </Container>
      </Router>
    </Box>
  );
}
