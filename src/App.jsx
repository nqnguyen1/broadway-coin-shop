// App.js
import React, {  useState, useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import USCoinsPage from './pages/USCoinsPage';
import WorldCoinsPage from './pages/WorldCoinsPage';
import BullionPage from './pages/BullionPage';
import CurrencyPage from './pages/CurrencyPage';
import './styles/App.css';

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("/api/index.php?api_key=ab301ece-c99b-486c-9785-9871d9c034a1");
      const data = await response.json();
      const tempFilteredProducts = data.map((product)=>{
        product.image = "http://broadwaycoin.com/images/placeholder.jpg"
        product.category = "us-coins"
        product.description = `This ${product.Date} ${product.Type} is a valuable addition to any collection. ${product.Grade ? `Graded ${product.Grade}, ` : ''}this piece represents an excellent example of ${product.Country || ''} coinage.`
        product.inStock = true
        return product
      }) //do this filter steps in python when first add data to database
      const sampleWorldCoins = [
        {
            "id": "w001",
            "title": "1889 British Crown",
            "description": "Queen Victoria - XF condition",
            "price": 89.0,
            "image": "http://broadwaycoin.com/images/placeholder.jpg",
            "category": "world-coins",
            "inStock": true
        },
        {
            "id": "w002",
            "title": "1954 Canada Dollar",
            "description": "Elizabeth II - AU condition",
            "price": 45.0,
            "image": "http://broadwaycoin.com/images/placeholder.jpg",
            "category": "world-coins",
            "inStock": true
        }
    ];

    const sampleBullion = [
      {
          "id": "b001",
          "title": "2023 American Gold Eagle",
          "description": "1 oz - .9167 fine gold",
          "price": 2150.0,
          "image": "http://broadwaycoin.com/images/placeholder.jpg",
          "category": "bullion",
          "inStock": true
      },
      {
          "id": "b002",
          "title": "2023 Canadian Silver Maple Leaf",
          "description": "1 oz - .9999 fine silver",
          "price": 36.0,
          "image": "http://broadwaycoin.com/images/placeholder.jpg",
          "category": "bullion",
          "inStock": true
      }
    ];

  const sampleCurrency = [
      {
          "id": "c001",
          "title": "1923 $1 Silver Certificate",
          "description": "VF condition - Blue seal",
          "price": 75.0,
          "image": "http://broadwaycoin.com/images/placeholder.jpg",
          "category": "currency",
          "inStock": true
      },
      {
          "id": "c002",
          "title": "1899 $5 Silver Certificate",
          "description": "Fine condition - Chief Running Antelope",
          "price": 950.0,
          "image": "http://broadwaycoin.com/images/placeholder.jpg",
          "category": "currency",
          "inStock": true
      }
   ];

  setAllProducts([
    ...tempFilteredProducts,
    ...sampleWorldCoins, 
    ...sampleBullion, 
    ...sampleCurrency
  ])
    };
    
    loadProducts(); // <-- 
    
    
  }, []);



  return (
    <Router>
      <div className="app">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/shop" element={<ShopPage allProducts={allProducts} /> } />
            <Route path="/product/:id" element={<ProductPage allProducts={allProducts}  />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />

            {/* Category-specific pages */}
            <Route path="/us-coins" element={<USCoinsPage allProducts={allProducts}  />} />
            <Route path="/world-coins" element={<WorldCoinsPage allProducts={allProducts} />} />
            <Route path="/bullion" element={<BullionPage  allProducts={allProducts}  />} />
            <Route path="/currency" element={<CurrencyPage  allProducts={allProducts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;