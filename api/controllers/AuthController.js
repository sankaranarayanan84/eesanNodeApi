/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcryptjs');
module.exports = {
login: async function(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.badRequest({ message: 'Email and password are required.' });
    }

    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.notFound({ message: 'User not found.' });
      }

      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.unauthorized({ message: 'Invalid credentials.' });
      }

      // Passwords match, user is authenticated
      // You can now generate a session or JWT token here
      return res.ok({ message: 'Login successful!', user: user });

    } catch (err) {
      return res.serverError(err);
    }
  }
};

