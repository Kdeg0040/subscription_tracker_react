import React from 'react';

import Layout from './components/Layout';
import Subscriptions from './components/Subscriptions';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Subscriptions />
      <Footer />
    </Layout>
  );
}

export default App;