import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import SharedProductLayout from './pages/SharedProductLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
          <Route path=':productId' element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
