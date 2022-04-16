import { render, screen } from '@testing-library/react';
import Counter from '.';

describe('Counter Component', () => {
	test('Deve iniciar o título com o valor 0', () => {
		render(<Counter />);

		const counterTitle = screen.getByText(0);

		expect(counterTitle).toBeInTheDocument();
	});

	test('Deve conter a classe counter__title no título', () => {
		render(<Counter />);

		const counterTitle = screen.getByText(0);

		expect(counterTitle).toHaveClass('counter__title');
	});

	test('Deve conter a classe button--increment no button de increment', () => {
		render(<Counter />);

		const button = screen.getByText('Incrementar');

		expect(button).toHaveClass('button--increment');
	});

	test('Deve conter a classe button--decrement no button de decrement', () => {
		render(<Counter />);

		const button = screen.getByText('Decrementar');

		expect(button).toHaveClass('button--decrement');
	});
});
