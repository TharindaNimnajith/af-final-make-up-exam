const fileUpload = (req, res) => {
  const data = {
    filename: req.file.filename,
    destination: req.file.destination
  }

  res.status(200).send(data)
}

module.exports = {
  fileUpload
}
