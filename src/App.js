import React from 'react';

import Layout from './components/Layout';
import Header from './components/Header';
import Subscriptions from './components/Subscriptions';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Subscriptions />
      <Footer />
    </Layout>
  );
}

export default App;