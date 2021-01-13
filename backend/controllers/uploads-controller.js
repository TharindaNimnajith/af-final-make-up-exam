const fileUpload = (req, res) => {
  res.status(200).json({
    data: {
      filename: req.file.filename,
      destination: req.file.destination
    }
  })
}

module.exports = {
  fileUpload
}
