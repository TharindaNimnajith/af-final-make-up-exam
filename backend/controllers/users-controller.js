const HttpErrorsModel = require('../models/http-errors')
const UserModel = require('../models/users.model')

const addUser = async (req, res, next) => {
  let existingUser

  let {
    firstName,
    lastName,
    email,
    password
  } = req.body

  try {
    existingUser = await UserModel.findOne({
      email: email
    })
  } catch (error) {
    console.log(error)
    return next(new HttpErrorsModel('Unexpected internal server error occurred, please try again later.', 500))
  }

  if (existingUser) {
    res.json({
      exists: true,
      message: 'A user with the same email already exists.'
    })
    return next(new HttpErrorsModel('A user with the same email already exists.', 409))
  }

  const newUser = new UserModel({
    firstName,
    lastName,
    email,
    password
  })

  try {
    await newUser.save()
  } catch (error) {
    console.log(error)
    return next(new HttpErrorsModel('Unexpected internal server error occurred, please try again later.', 500))
  }

  res.status(201).send({
    message: 'New user added successfully!'
  })
}

const updateUser = async (req, res, next) => {
  let user
  let existingUser

  const {
    id
  } = req.params

  const {
    firstName,
    lastName,
    email,
    password
  } = req.body

  try {
    user = await UserModel.findById(id)
  } catch (error) {
    console.log(error)
    return next(new HttpErrorsModel('Unexpected internal server error occurred, please try again later.', 500))
  }

  try {
    existingUser = await UserModel.findOne({
      email: email
    })
  } catch (error) {
    console.log(error)
    return next(new HttpErrorsModel('Unexpected internal server error occurred, please try again later.', 500))
  }

  if (existingUser && email !== user.email) {
    res.json({
      exists: true,
      message: 'A user with the same email already exists.'
    })
    return next(new HttpErrorsModel('A user with the same email already exists.', 409))
  }

  user.firstName = firstName
  user.lastName = lastName
  user.email = email
  user.password = password

  try {
    await user.save()
  } catch (error) {
    console.log(error)
    return next(new HttpErrorsModel('Unexpected internal server error occurred, please try again later.', 500))
  }

  res.status(200).send({
    message: 'User updated successfully!'
  })
}

const deleteUser = async (req, res, next) => {
  let user

  const {
    id
  } = req.params

  try {
    user = await UserModel.findById(id)
    await user.remove()
  } catch (error) {
    console.log(error)
    return next(new HttpErrorsModel('Unexpected internal server error occurred, please try again later.', 500))
  }

  res.status(200).send({
    message: 'User deleted successfully!'
  })
}

const getUser = async (req, res, next) => {
  let user

  const {
    id
  } = req.params

  try {
    user = await UserModel.findById(id)
  } catch (error) {
    console.log(error)
    return next(new HttpErrorsModel('Unexpected internal server error occurred, please try again later.', 500))
  }

  user.userCapacity = user.userCapacity.toString()

  res.status(200).send(user)
}

const getUserList = async (req, res, next) => {
  let userList

  try {
    userList = await UserModel.find()
  } catch (error) {
    console.log(error)
    return next(new HttpErrorsModel('Unexpected internal server error occurred, please try again later.', 500))
  }

  for (let i = 0; i < userList.length; i++)
    userList[i].userCapacity = userList[i].userCapacity.toString()

  res.status(200).send(userList)
}

exports.addUser = addUser
exports.updateUser = updateUser
exports.deleteUser = deleteUser
exports.getUser = getUser
exports.getUserList = getUserList
