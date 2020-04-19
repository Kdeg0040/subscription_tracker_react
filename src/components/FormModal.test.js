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

  describe('to trigger the `hide` callback', () => {
    it('can be done by clicking on modal background', () => {
      formModal.find('.modal-background').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    });

    it('can be done by clicking on `cancel` button', () => {
      formModal.find('.btn-cancel').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    });
  });
});