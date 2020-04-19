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

  it('initializes the `state` not displaying modal form', () => {
    expect(subscriptions.state().showModal).toEqual(false);
  });

  describe('when clicking the `+` button', () => {
    beforeEach(() => {
      subscriptions.find('.btn-add').simulate('click');
    });

    it('toggles showModal state', () => {
      expect(subscriptions.state().showModal).toEqual(true);
    });

    // it('adds a new `Subscription` to state', () => {
    //   expect(subscriptions.state().subsList.length).toEqual(1);
    //   subscriptions.find('.btn-add').simulate('click');
    //   expect(subscriptions.state().subsList.length).toEqual(2);
    // })
  });
});

