const bcrypt = require('bcrypt')

const UserModel = require('../models/users.model')

const login = async (req, res) => {
  const {
    email,
    password
  } = req.body

  try {
    const user = await UserModel.findOne({
      email: email
    })
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        status: 'Authorized',
        data: user
      })
    } else {
      res.status(401).json({
        status: 'Unauthorized'
      })
    }
  } catch (err) {
    res.status(401).json({
      status: 'Unauthorized'
    })
  }
}

module.exports = {
  login
}
