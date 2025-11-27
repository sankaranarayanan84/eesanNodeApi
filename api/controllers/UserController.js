/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body).fetch();
      return res.status(201).json(newUser);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async getAllUsers(req, res){
    try{
        const users = await User.find(); // User is your model
          return res.ok({users: users});
    }catch (err){
        return res.serverError(err)
    }
  }
};

