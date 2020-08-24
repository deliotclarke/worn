import React from 'react';
import 'mutationobserver-shim';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-redux', () => {
  const ActualReduxContext = require.requireActual('react-redux');
  return {
    ...ActualReduxContext,
    useSelector: jest.fn().mockImplementation(() => {
      const mockedState = { name: 'Bob Newhart said No' };
      return mockedState;
    }),
  };
});
test('renders title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('WORN');
  expect(linkElement).toBeInTheDocument();
});
