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

  it('initially does not show suggestions', () => {
    expect(formModal.instance().showSuggestions()).toEqual('');
  });

  it('hide suggestions by clicking anywhere on form', () => {
    formModal.find('.input-company').simulate('change', { target: { value: 'Test Company' } });
    formModal.find('.modal-card-body').simulate('click');
    expect(formModal.state().suggestions).toEqual([]);
  });

  describe('when clicking the modal background', () => {
    it('triggers the `hide` callback', () => {
      formModal.find('.modal-background').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    })

    it('resets all input values', () => {
      formModal.find('.input-company').simulate('change', { target: { value: 'Test Company' } });
      formModal.find('.modal-background').simulate('click');
      expect(formModal.state().name).toEqual('');
    });
  });

  describe('when clicking the `cancel` button', () => {
    it('triggers the `hide` callback', () => {
      formModal.find('.btn-cancel').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    })

    it('resets all input values', () => {
      formModal.find('.input-company').simulate('change', { target: { value: 'Test Company' } });
      formModal.find('.btn-cancel').simulate('click');
      expect(formModal.state().name).toEqual('');
    });
  });

  describe('when clicking the `x` button', () => {
    it('triggers the `hide` callback', () => {
      formModal.find('.btn-cross').simulate('click');
      expect(mockHide).toHaveBeenCalledTimes(1);
    })

    it('resets all input values', () => {
      formModal.find('.input-company').simulate('change', { target: { value: 'Test Company' } });
      formModal.find('.btn-cross').simulate('click');
      expect(formModal.state().name).toEqual('');
    });
  });

  describe('when clicking the `save` button', () => {
    it('triggers the `save` callback', () => {
      formModal.find('.btn-save').simulate('click');
      expect(mockSave).toHaveBeenCalledTimes(1);
    });

    it('resets all input values', () => {
      formModal.find('.input-company').simulate('change', { target: { value: 'Test Company' } });
      formModal.find('.btn-save').simulate('click');
      expect(formModal.state().name).toEqual('');
    });
  });

  describe('when typing into description input', () => {
    it('updates description in `state`', () => {
      formModal.find('.input-description').simulate('change', { target: { value: 'Test Description' } });
      expect(formModal.state().description).toEqual('Test Description');
    });
  });
  
  describe('when typing into payment date input', () => {
    it('updates payment date in `state`', () => {
      formModal.find('.input-payment-date').simulate('change', { target: { value: '31/12/2020' } });
      expect(formModal.state().paymentDate).toEqual('31/12/2020');
    });
  });

  describe('when typing into cost input', () => {
    it('updates cost in `state`', () => {
      formModal.find('.input-cost').simulate('change', { target: { value: '10.00' } });
      expect(formModal.state().cost).toEqual('10.00');
    });
  });

  describe('when selecting a payment frequency', () => {
    it('updates the frequency in `state`', () => {
      formModal.find('.frequency-input').simulate('change', { target: { value: 'Annually' } });
      expect(formModal.state().frequency).toEqual('Annually');
    });
  });

  describe('when a suggestion is clicked', () => {
    const selectedSuggestion =  { name: 'Test Company', logo: 'testcompany.url'}
    it('autofills the input field', () => {
      formModal.instance().handleSuggestionSelection(selectedSuggestion);
      expect(formModal.find('.input-company').props().value).toEqual('Test Company');
    });

    it('clears suggestions', () => {
      formModal.instance().handleSuggestionSelection(selectedSuggestion);
      expect(formModal.state().suggestions).toEqual([]);
    });
  });

  describe('when typing into the company input', () => {
    const url = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=:spot'
    const mockSuccessResponse = [
      {"name":"Spotify"},
      {"name":"Spot.IM"},
      {"name":"Spotrac"},
      {"name":"SpotKeys.com"},
      {"name":"SpotOn"}
    ];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);    

    it('updates the company in `state`', () => {
      formModal.find('.input-company').simulate('change', { target: { value: 'Test Company' } });
      expect(formModal.state().name).toEqual('Test Company');
    });

    it('can retrieve company name suggestions', (done) => {
      formModal.find('.input-company').simulate('change', { target: { value: 'spot' } });
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);

      process.nextTick(() => {
        expect(formModal.state().suggestions.length).toEqual(5)
      });

      global.fetch.mockClear();
      done();
    });

    it('displays the suggestions', () => {
      expect(formModal.instance().showSuggestions()).toEqual('is-active')
    });
  });
});