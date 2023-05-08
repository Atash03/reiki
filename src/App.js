import React from 'react';
import './App.css';

import { CTASection, Features, Footer, Header, Invitation, Metrics, Presenter, Quote, Resources } from './containers';
import { Navbar, NewsletterCTA } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CTASection />
      <Presenter />
      <Resources />
      <Quote />
      <Features />
      <NewsletterCTA />
      <Metrics />
      <Invitation />
      <Footer />
    </>
  )
}

export default App;
