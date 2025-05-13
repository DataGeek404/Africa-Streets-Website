import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import PaymentPage from './pages/payment';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentAgreement from './components/PaymentAgreement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/" element={<PaymentAgreement />} />
          <Route path="/success" element={<PaymentSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
