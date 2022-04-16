import React from 'react';
import './styles.css';

const Button = ({ text, ...rest }) => {
	return (
		<button data-testid="button" {...rest}>
			{text}
		</button>
	);
};

export default Button;
