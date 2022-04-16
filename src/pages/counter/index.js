import React, { useState } from 'react';
import Button from '../../components/button';
import './styles.css';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const getModifier = () => {
		if (counter > 0) return 'counter__title--increment';
		if (counter < 0) return 'counter__title--decrement';
		return '';
	};

	return (
		<div className="counter">
			<h1 className={`counter__title ${getModifier()}`}>{counter}</h1>
			<section className="buttons">
				<Button
					className="button button--increment"
					onClick={() => setCounter(counter + 1)}
					text="Incrementar"
				/>
				<Button
					className="button button--decrement"
					onClick={() => setCounter(counter - 1)}
					text="Decrementar"
				/>
			</section>
			<Button
				className="button button--initial"
				onClick={() => setCounter(0)}
				text="	Zerar"
			/>
		</div>
	);
};

export default Counter;
