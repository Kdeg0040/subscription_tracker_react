import React from 'react';
import { shallow } from 'enzyme'

import App from './App';
import Layout from './components/Layout';

const app = shallow(<App />);

describe('<App />', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders a Layout component', () => {
    expect(app.find(Layout).exists()).toBe(true);
  });
});