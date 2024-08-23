//Sign up user
const signupUser = async (req, res) => {
    res.json({message: 'Signup route works!'});
}

// Login User
const loginUser = async (req, res) => {
    res.json({message: 'Login route works!'});
}


export { signupUser, loginUser };