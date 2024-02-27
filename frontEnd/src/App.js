import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import Programs from "./components/Programs/Programs";
import WhatWeDo from "./components/WhatWeDo";
import Diabetes from "./components/Programs/Diabetes";
import PCOD from "./components/Programs/PCOD";
import Dyslipedimia from "./components/Programs/Dyslipedimia";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/programs" element={<Programs />}>
            <Route path="diabetes" element={<Diabetes />} />
            <Route path="dyslipedimia" element={<Dyslipedimia />} />
            <Route path="pcod" element={<PCOD />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
