import React from 'react';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import Testimonials from '../components/Testimonials';
import ProductReviews from '../components/ProductReviews';
import PurchaseForm from '../components/PurchaseForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductDetails />
        <Testimonials />
        <ProductReviews />
        <PurchaseForm />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
