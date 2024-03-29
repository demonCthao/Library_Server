var express = require('express');
var router = express();
const mongoose = requrie('mongoose');
const multer = require('multer');

//Đường dẫn controller

const authorcontroller = require('../controller/author.controller');


main().catch(err =>console.log(err));

async function main(){
    // tai khaoan : mat khau
    // Products la ten cua database
    const db = process.env.mongoconnect
    await mongoose.connect(db);
}

router.get('/',authorcontroller.getAllAuthor);
router.get('/')

