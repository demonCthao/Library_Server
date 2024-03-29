//duong dan model 
const Author = require('../model/author');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Duong dan luu tru file
    },
    // Tu dong dat ten anh la thoi gian hien tai + 1 so random
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    }
});
const upload = multer({
    storage: storage,
});

exports.getAllAuthor = (async(req,res,next)=>{
    const data = await Author.find();
    const librarian = req.session.librarian;
})