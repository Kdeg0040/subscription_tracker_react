import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment'

import Subscription from './Subscription';

describe('<Subscription />', () => {
  const mockDelete = jest.fn();
  const props = {
    sub: { id: 1, name: 'Test Company', paymentDate: moment('01/01/2000', 'DDMMYYYY') },
    delete: mockDelete
  }
  const subscription = shallow(<Subscription {...props}/>);

  it('renders correctly', () => {
    expect(subscription).toMatchSnapshot();
  });

  describe('when clicking the delete button', () => {
    it('triggers the delete callback', () => {
      subscription.find('.btn-delete').simulate('click');
      expect(mockDelete).toHaveBeenCalledTimes(1);
    });
  });
});