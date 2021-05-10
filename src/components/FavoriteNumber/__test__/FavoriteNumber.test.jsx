import React from 'react';
import { render } from '@testing-library/react';
import { FavoriteNumber } from '../FavoriteNumber';
// function render(ui) {
//   const container = document.createElement('div');
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   return {container, ...queries}
// }

test('renders a number input with label "Favorite Number"', () => {
    const { getByLabelText } = render(<FavoriteNumber />);
    const input = getByLabelText(/Favorite Number/i);
    expect(input).toHaveAttribute('type', 'number');
});
