import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';

import {signWithGoogle} from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault();
	};

	handleChange = event => {
		const {name, value} = event.target;

		this.setState({[name]: value});
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign with out email an password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required/>
					<div className='buttons'>
						<CustomButton type='submit'>
							Sign In
						</CustomButton>
						<CustomButton onClick={signWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;
