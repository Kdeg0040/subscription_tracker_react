import React from 'react';
import { shallow } from 'enzyme';

import FormModal from './FormModal';


describe('<FormModal />', () => {
  const mockHide = jest.fn();
  const props = { hide: mockHide };
  const formModal = shallow(<FormModal {...props} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(formModal).toMatchSnapshot();
  });

  describe('when user clicks on modal background', () => {
    it('calls the hide callback', () => {
      formModal.find('.modal-background').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    });
  });

  describe('when user clicks on `cancel` button', () => {
    it('calls the hide callback', () => {
      formModal.find('.btn-cancel').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    });
  });
});