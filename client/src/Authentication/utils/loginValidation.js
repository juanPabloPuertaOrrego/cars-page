const loginValidation = (email, password) => {
	const errors = {};

	if (!email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		errors.email = 'Email address is invalid'
	}
	if (!password) {
		errors.password = 'Password is required'
	}
    return errors
}

export default loginValidation;
