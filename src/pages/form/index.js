import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './index.css';

export const MyForm = () => {
	const handleSubmit = (values) => {
		return alert(JSON.stringify(values, null, 2));
	};

	const schema = yup.object().shape({
		firstName: yup
			.string()
			.min(2, 'Nome muito curto!')
			.max(50, 'Nome muito longo!')
			.required('O nome é um campo obrigatório!'),
		lastName: yup
			.string()
			.min(2, 'Sobrenome muito curto!')
			.max(50, 'Sobrenome muito longo!')
			.required('O sobrenome é um campo obrigatório!'),
		email: yup
			.string()
			.email('Digite um email válido!')
			.min(2, 'email muito curto!')
			.max(20, 'email muito longo!')
			.required('O email é um campo obrigatório!'),
	});

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validationSchema: schema,
		onSubmit: handleSubmit,
	});

	return (
		<form className="form" onSubmit={formik.handleSubmit}>
			<label className="label" htmlFor="firstName">
				Nome
			</label>
			<input
				className="input"
				id="firstName"
				name="firstName"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.firstName}
				style={{
					border: formik.errors.firstName
						? '1px solid red'
						: '1px solid black',
				}}
			/>
			{formik.errors.firstName && formik.touched.firstName ? (
				<div
					style={{
						color: 'red',
					}}>
					{formik.errors.firstName}
				</div>
			) : null}
			<label className="label" htmlFor="lastName">
				Sobrenome
			</label>
			<input
				className="input"
				id="lastName"
				name="lastName"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.lastName}
			/>
			{formik.errors.lastName && formik.touched.lastName ? (
				<div
					style={{
						color: 'red',
					}}>
					{formik.errors.lastName}
				</div>
			) : null}
			<label className="label" htmlFor="email">
				Email
			</label>
			<input
				className="input"
				id="email"
				name="email"
				type="email"
				onChange={formik.handleChange}
				value={formik.values.email}
			/>
			{formik.errors.email && formik.touched.email ? (
				<div
					style={{
						color: 'red',
					}}>
					{formik.errors.email}
				</div>
			) : null}
			<button type="submit">Cadastrar</button>
		</form>
	);
};

export default MyForm;
