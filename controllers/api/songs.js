const Song = require('../../models/song');

module.exports = {
  create,
  index,
  delete: deleteSong
};

async function create (req, res) {
  try {
    req.body.user = req.user._id;
    const song = await Song.create(req.body);
    res.json(song);
  } catch {
    res.status(400).json(err);
  }
}

async function index (req, res) {
  const songs = await Song.find({}).populate('user').exec();
  res.json(songs);
}

async function deleteSong (req, res) {
  try {
    await Song.findOneAndDelete(
      {user: req.user._id, _id: req.params.id}
    )
  } catch {
    res.status(400).json(err);
  }
}
