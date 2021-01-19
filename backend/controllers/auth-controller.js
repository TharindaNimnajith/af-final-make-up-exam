const bcrypt = require('bcrypt')

const UserModel = require('../models/users.model')

const login = async (req, res) => {
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
    res.status(500).send(error)
  }

  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).send(user)
  } else {
    res.status(401).send({
      status: 'Unauthorized'
    })
  }
}

module.exports = {
  login
}
