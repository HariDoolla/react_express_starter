const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    notification: String,
    notificationcontent: String
}, {
    timestamps: true
});

const Note = mongoose.model('notes', NoteSchema);

var create = (req, res) => {
    const note = new Note({ notification: req.body.notification,
        notificationcontent: req.body.notificationcontent
    });
    // Save Note in the database
    note.save().then(data => {res.send(data);})
};

var findAll = (req, res) => {
    Note.find()
    .then(notes => {
        res.send(notes);
    })
};

var findOne = (req, res) => {
    Note.findById(req.params.noteId)
    .then(note => {
        res.send(note);
});
};
var  update = (req, res) => {
    Note.findByIdAndUpdate(req.params.noteId, {
      notification: req.body.notification,
        notificationcontent: req.body.notificationcontent
    }, {new: true})
    .then(note => {
        res.send(note);
    })
};

var Del = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        res.send({message: "Note deleted successfully!"});
    })
};

module.exports = (app) => {
    app.post('/notes', create);
    app.get('/notes', findAll);
    app.get('/notes/:noteId', findOne);
    app.put('/notes/:noteId', update);
    app.delete('/notes/:noteId', Del);
}
