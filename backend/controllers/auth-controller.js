const bcrypt = require('bcrypt')

const HttpErrors = require('../config/errors.config')
const UserModel = require('../models/users.model')

const login = async (req, res, next) => {
  let user

  const {
    email,
    password
  } = req.body

  try {
    user = await UserModel.findOne({
      email: email
    })
  } catch (error) {
    console.log(error)
    return next(new HttpErrors('Unexpected internal server error occurred, please try again later.', 500))
  }

  if (user && bcrypt.compareSync(password, user.password))
    res.status(200).send(user)
  else
    res.status(401).send({
      status: 'Unauthorized'
    })
}

module.exports = {
  login
}
