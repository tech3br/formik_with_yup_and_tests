import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
	test('Deverá renderizar um botão', () => {
		render(<Button />);

		const buttonTestId = screen.getByTestId('button');

		expect(buttonTestId).toBeInTheDocument();
	});

	test('Deve conter uma cor', () => {
		render(<Button />);

		const buttonByRole = screen.getByTestId('button');

		expect(buttonByRole).toHaveStyle('background-color: green');
	});
});
