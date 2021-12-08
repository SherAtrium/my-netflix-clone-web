import React from 'react';
import { render } from '@testing-library/react';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';
import {
  DEFAULT_SORT_TYPE_QUERY,
  MOVIES_PAGE_LIMIT,
  MOVIES_PAGE_OFFSET,
  MOVIES_SEARCH_BY_TITLE,
  MOVIES_SORT_ORDER_DESC,
} from '../Utils/Constants';

// eslint-disable-next-line no-undef
describe('Testing App', () => {
  const initialState = {
    moviesData: {
      movies: [],
      isLoading: true,
      moviesRequestBody: {
        filter: '',
        search: '',
        limit: MOVIES_PAGE_LIMIT,
        offset: MOVIES_PAGE_OFFSET,
        sortBy: DEFAULT_SORT_TYPE_QUERY,
        searchBy: MOVIES_SEARCH_BY_TITLE,
        sortOrder: MOVIES_SORT_ORDER_DESC,
      },
    },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  const Wrapper = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  // eslint-disable-next-line no-undef
  test('Render App without crashing', () => {
    const { asFragment } = render(Wrapper);
    // eslint-disable-next-line no-undef
    expect(asFragment()).toMatchSnapshot();
  });
});
