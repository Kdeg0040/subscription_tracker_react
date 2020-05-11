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

    it('can toggle showModal state to true', () => {
      expect(subscriptions.state().showModal).toEqual(true);
    });

    describe('and the user wants to cancel', () => {
      it('can toggle showModal state', () => {
        subscriptions.instance().hideModalHandler();
        expect(subscriptions.state().showModal).toEqual(false);
      });
    });

    describe('and the user wants to save the subscription', () => {
      let testCompany1 = { 
        id: 1, 
        name: 'Test Company', 
        description: 'Test Description',
        paymentDate: '01/01/2000',
        logo: 'LogoURL' 
      };

      let testCompany2 = { 
        id: 2, 
        name: 'Test Company2', 
        description: 'Test Description',
        paymentDate: '02/01/2000',
        logo: 'LogoURL' 
      };

      it('adds a new `Subscription` to state', () => {
        subscriptions.instance().addSub(testCompany1);
        expect(subscriptions.state().subsList.length).toEqual(1);
        subscriptions.instance().addSub(testCompany2);
        expect(subscriptions.state().subsList.length).toEqual(2);
        subscriptions.instance().setState({ subsList: [] });
      });

      it('sorts Subscriptions by date', () => {
        const testDate = new Date(testCompany1.paymentDate)
        subscriptions.instance().addSub(testCompany2);
        subscriptions.instance().addSub(testCompany1);
        expect(subscriptions.state().subsList[0].paymentDate).toEqual(testDate)
      });
    });
  });

  describe('when the user wants to remove an added subscription', () => {
    it('removes the subscription from state', () => {
      subscriptions.setState({ subsList: [
        {id: 1, details: { company: "Test Company" } }]
      });
      subscriptions.instance().deleteSub(1);
      expect(subscriptions.state().subsList.length).toEqual(0);
    });
  });
});

