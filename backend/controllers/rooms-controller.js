const RoomModel = require('../models/rooms.model')

const addRoom = async (req, res) => {
  let existingRoom

  let {
    roomName,
    buildingName,
    roomType,
    roomCapacity
  } = req.body

  try {
    existingRoom = await RoomModel.findOne({
      roomName: roomName
    })
  } catch (error) {
    res.status(500).send(error)
  }

  if (existingRoom) {
    res.status(409).send({
      exists: true,
      message: 'A room with the same name already exists.'
    })
  }

  roomCapacity = parseInt(roomCapacity)

  const newRoom = new RoomModel({
    roomName,
    buildingName,
    roomType,
    roomCapacity
  })

  try {
    await newRoom.save()
  } catch (error) {
    res.status(500).send(error)
  }

  res.status(201).send({
    message: 'New room added successfully!'
  })
}

const updateRoom = async (req, res) => {
  let room
  let existingRoom

  const {
    id
  } = req.params

  const {
    roomName,
    buildingName,
    roomType,
    roomCapacity
  } = req.body

  try {
    room = await RoomModel.findById(id)
  } catch (error) {
    res.status(500).send(error)
  }

  try {
    existingRoom = await RoomModel.findOne({
      roomName: roomName
    })
  } catch (error) {
    res.status(500).send(error)
  }

  if (existingRoom && roomName !== room.roomName) {
    res.status(409).send({
      exists: true,
      message: 'A room with the same name already exists.'
    })
  }

  room.roomName = roomName
  room.buildingName = buildingName
  room.roomType = roomType
  room.roomCapacity = parseInt(roomCapacity)

  try {
    await room.save()
  } catch (error) {
    res.status(500).send(error)
  }

  res.status(200).send({
    message: 'Room updated successfully!'
  })
}

const deleteRoom = async (req, res) => {
  let room

  const {
    id
  } = req.params

  try {
    room = await RoomModel.findById(id)
    await room.remove()
  } catch (error) {
    res.status(500).send(error)
  }

  res.status(200).send({
    message: 'Room deleted successfully!'
  })
}

const getRoom = async (req, res) => {
  let room

  const {
    id
  } = req.params

  try {
    room = await RoomModel.findById(id)
  } catch (error) {
    res.status(500).send(error)
  }

  room.roomCapacity = room.roomCapacity.toString()

  res.status(200).send(room)
}

const getRoomList = async (req, res) => {
  let roomList

  try {
    roomList = await RoomModel.find()
  } catch (error) {
    res.status(500).send(error)
  }

  for (let i = 0; i < roomList.length; i++)
    roomList[i].roomCapacity = roomList[i].roomCapacity.toString()

  res.status(200).send(roomList)
}

const getRoomListByBuilding = async (req, res) => {
  let roomList

  const {
    buildingName
  } = req.body

  try {
    roomList = await RoomModel.find({
      buildingName: buildingName
    })
  } catch (error) {
    res.status(500).send(error)
  }

  for (let i = 0; i < roomList.length; i++)
    roomList[i].roomCapacity = roomList[i].roomCapacity.toString()

  res.status(200).send(roomList)
}

const getRoomByRoomName = async (req, res) => {
  let room

  const {
    roomName
  } = req.body

  try {
    room = await RoomModel.find({
      roomName: roomName
    })
  } catch (error) {
    res.status(500).send(error)
  }

  res.status(200).send(room)
}

const getRoomListByRoomName = async (req, res) => {
  let roomList

  const {
    roomName
  } = req.body

  try {
    roomList = await RoomModel.find({
      roomName: {
        $regex: '.*' + roomName + '.*',
        $options: 'i'
      }
    })
  } catch (error) {
    res.status(500).send(error)
  }

  for (let i = 0; i < roomList.length; i++)
    roomList[i].roomCapacity = roomList[i].roomCapacity.toString()

  res.status(200).send(roomList)
}

const getRoomListByRoomType = async (req, res) => {
  let roomList

  const {
    roomType
  } = req.body

  try {
    roomList = await RoomModel.find({
      roomType: roomType
    })
  } catch (error) {
    res.status(500).send(error)
  }

  for (let i = 0; i < roomList.length; i++)
    roomList[i].roomCapacity = roomList[i].roomCapacity.toString()

  res.status(200).send(roomList)
}

const searchRooms = async (req, res) => {
  let roomList

  const {
    roomName,
    buildingName,
    roomType
  } = req.body

  if (roomName !== "" && buildingName !== "" && roomType !== "") {
    try {
      roomList = await RoomModel.find({
        roomName: {
          $regex: '.*' + roomName + '.*',
          $options: 'i'
        },
        buildingName: buildingName,
        roomType: roomType
      })
    } catch (error) {
      res.status(500).send(error)
    }
  } else if (roomName !== "" && buildingName !== "") {
    try {
      roomList = await RoomModel.find({
        roomName: {
          $regex: '.*' + roomName + '.*',
          $options: 'i'
        },
        buildingName: buildingName
      })
    } catch (error) {
      res.status(500).send(error)
    }
  } else if (roomName !== "" && roomType !== "") {
    try {
      roomList = await RoomModel.find({
        roomName: {
          $regex: '.*' + roomName + '.*',
          $options: 'i'
        },
        roomType: roomType
      })
    } catch (error) {
      res.status(500).send(error)
    }
  } else if (buildingName !== "" && roomType !== "") {
    try {
      roomList = await RoomModel.find({
        buildingName: buildingName,
        roomType: roomType
      })
    } catch (error) {
      res.status(500).send(error)
    }
  } else if (roomName !== "") {
    try {
      roomList = await RoomModel.find({
        roomName: {
          $regex: '.*' + roomName + '.*',
          $options: 'i'
        }
      })
    } catch (error) {
      res.status(500).send(error)
    }
  } else if (buildingName !== "") {
    try {
      roomList = await RoomModel.find({
        buildingName: buildingName
      })
    } catch (error) {
      res.status(500).send(error)
    }
  } else if (roomType !== "") {
    try {
      roomList = await RoomModel.find({
        roomType: roomType
      })
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    try {
      roomList = await RoomModel.find()
    } catch (error) {
      res.status(500).send(error)
    }
  }

  for (let i = 0; i < roomList.length; i++)
    roomList[i].roomCapacity = roomList[i].roomCapacity.toString()

  res.status(200).send(roomList)
}

exports.addRoom = addRoom
exports.updateRoom = updateRoom
exports.deleteRoom = deleteRoom
exports.getRoom = getRoom
exports.getRoomList = getRoomList
exports.getRoomListByBuilding = getRoomListByBuilding
exports.getRoomByRoomName = getRoomByRoomName
exports.getRoomListByRoomName = getRoomListByRoomName
exports.getRoomListByRoomType = getRoomListByRoomType
exports.searchRooms = searchRooms
