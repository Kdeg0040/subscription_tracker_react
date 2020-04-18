import React from 'react';
import { shallow } from 'enzyme';

import Subscriptions from './Subscriptions';

const subscriptions = shallow(<Subscriptions />);

describe('<Subscriptions />', () => {
  it('renders correctly', () => {
    expect(subscriptions).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of subscriptions', () => {
    expect(subscriptions.state().subsList).toEqual([]);
  });

  describe('when clicking the `+` button', () => {
    beforeEach(() => {
      subscriptions.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      subscriptions.setState({ subsList: [] });
    });

    it('adds a new `Subscription` to state', () => {
      expect(subscriptions.state().subsList.length).toEqual(1);
      subscriptions.find('.btn-add').simulate('click');
      expect(subscriptions.state().subsList.length).toEqual(2);
    })
  });
});

