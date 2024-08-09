import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    }, 
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileKengaytmasi = file.mimetype.split('/')[1]
        cb(null, file.fieldname + '-' + uniqueSuffix + `.${fileKengaytmasi}`)
    }
})

export const upload = multer({storage:storage})