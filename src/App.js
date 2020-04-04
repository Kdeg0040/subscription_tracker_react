import React from 'react';

import Layout from './components/Layout/Layout';
import Subscriptions from './containers/Subscriptions/Subscriptions'

function App() {
  return (
    <div>
      <Layout>
        <Subscriptions />
      </Layout>
    </div>
  );
}

export default App;
