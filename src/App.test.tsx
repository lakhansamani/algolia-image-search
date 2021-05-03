import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.setTimeout(30000);

test('should search lazy_fox.png', async () => {
	const { container } = render(<App />);
	// add delay for response to be there
	await new Promise((r) => setTimeout(r, 5000));
	// get initial result items
	const resultItemsInitially = container.getElementsByClassName('resultItem')
		.length;
	await new Promise((r) => setTimeout(r, 1000));
	// find the algolia search element
	const inputElement = container.getElementsByClassName(
		'ais-SearchBox-input',
	)[0];

	// fire search event
	fireEvent.change(inputElement, { target: { value: 'lazy_fox.png' } });
	// add delay for response to be there
	await new Promise((r) => setTimeout(r, 2000));
	// get result items
	const resultItems = container.getElementsByClassName('resultItem').length;
	// we cannot compare the exact number of results, because if someone else uploads a file this result could change but can make sure that number of results after search are less than number of results before search
	expect(resultItems).toBeLessThan(resultItemsInitially);
	unmountComponentAtNode(container);
});
