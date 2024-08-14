import productImageService from "./product-image.service.js"

class ProductImageController{
    #_service
    constructor(){
        this.#_service = productImageService
    }

    createImage = async (req, res) => {
        try {
            const imageObj = []
            req.files.forEach(element => {
            imageObj.push({
                _id:Date.now(),
                imageUrl:element.filename,
                productId:req.body.productId
            })
        });
        const images = await productImageService.createImages(imageObj)
        if (images) {
            res.status(201).send({
                message:"Images are Created"
            });
        }
        else{
            res.status(400).send({
                message:"Images kiritilishi kerak"
            });
        }
        } catch (error) {
            res.status(400).send({
                message:"Error happened with create image"
            })
        }
    }

    getImage = async (req, res) => {
        try {
            const image = await this.#_service.getOneImage(req.params.id)
            if (!image) {
                res.status(404).send({
                    message:"Image is not found"
                });
                return ;
            }
            res.status(200).send({
                data:image,
            });
        } catch (error) {
            res.status(400).send({
                message:"There is an error with finding one image with id"
            })
        }
    }

    getImages = async (req, res) => {
        try {
            const allImages = await this.#_service.getAllImages()
            if (!allImages) {
                res.status(404).send({
                    message:"Images are not found"
                });
                return;
            }
            res.status(200).send({
                data:allImages,
            });
        } catch (error) {
            res.status(400).send({
                message:"Error occured while getting all images"
            });
        }
    }

    deleteImage = async (req, res) => {
        try {
           const data = await this.#_service.deleteOneImage(req.params.id);
           if (data.acknowledged && data.deletedCount > 0) {
                res.status(200).send({
                    message:"Image is deleted"
                })
           }
           else{
            res.status(404).send({
                message:"Image is not found"
            })
           }
        } catch (error) {
            res.status(400).send({
                message:"There is error while delete image"
            })
        }
    }
}

export default new ProductImageController()