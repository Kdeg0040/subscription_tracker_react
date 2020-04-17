import React from 'react';
import { shallow } from 'enzyme';

import FormModal from './FormModal';

const formModal = shallow(<FormModal />);

describe('<FormModal />', () => {
  it('renders correctly', () => {
    expect(formModal).toMatchSnapshot();
  });
});