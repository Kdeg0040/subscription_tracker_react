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

  describe('when clicking the modal background', () => {
    it('triggers the `hide` callback', () => {
      formModal.find('.modal-background').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    })
  });

  describe('when clicking the `cancel` button', () => {
    it('triggers the `hide` callback', () => {
      formModal.find('.btn-cancel').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    })
  });

  describe('when clicking the `x` button', () => {
    it('triggers the `hide` callback', () => {
      formModal.find('.btn-cross').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    })
  });

  describe('when typing into the company input', () => {
    it('updates the company in `state`', () => {
      formModal.find('.input-company').simulate('change', { target: { value: 'Test Company' } });
      expect(formModal.state().company).toEqual('Test Company');
    })
  });

  describe('when clicking the `save` button', () => {
    it('triggers the `save` callback', () => {
      formModal.find('.btn-save').simulate('click');
      expect(mockSave).toHaveBeenCalledTimes(1);
    });

    it('resets all input values', () => {
      formModal.find('.input-company').simulate('change', { target: { value: 'Test Company' } });
      formModal.find('.btn-save').simulate('click');
      expect(formModal.state().company).toEqual('');
    });
  });
});