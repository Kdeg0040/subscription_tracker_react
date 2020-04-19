import React from 'react';
import { shallow } from 'enzyme';

import FormModal from './FormModal';


describe('<FormModal />', () => {
  const mockHide = jest.fn();
  const mockSave = jest.fn()
  const props = { hide: mockHide, save: mockSave };
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

    it('can be done by clicking on the `x` button', () => {
      formModal.find('.btn-cross').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    });
  });

  describe('when clicking the `save` button', () => {
    it('calls the addSub callback', () => {
      formModal.find('.btn-save').simulate('click');
      expect(mockSave).toHaveBeenCalledTimes(1);
    });
  });
});