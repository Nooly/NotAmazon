import './App.css'
//import Title from './Components/Shared/Title.jsx'
import { HomePage } from './Pages/HomePage.jsx'
import Footer from './Components/Shared/Footer'
import Header from './Components/Shared/Header.jsx'
import { BrowserRouter, Route, Routes, Container } from './imports.js';
import SignIn from './Pages/SignIn.jsx';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SignUp from './Pages/SignUp.jsx';
import { Description } from './Pages/Description.jsx';
import Cart from './Pages/Cart.jsx';
import { Shipping } from './Pages/Shipping.jsx';
import Payment from './Pages/Payment.jsx';
import { SubmitOrder } from './Pages/SubmitOrder.jsx';

function App() {


  return (
    <BrowserRouter>
      <div className='d-flex flex-column side-allPage min-width'>
        <ToastContainer position='bottom-center' limit={1}/>
        <Header />
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product/:token" element={< Description/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/shipping' element={<Shipping/>}></Route>
              <Route path='/payment' element={<Payment/>}></Route>
              <Route path='placeholder' element={<SubmitOrder/>}></Route>

            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
