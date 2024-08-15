import { productImages } from "./product-image.schema.js"
import fs from 'fs';
import path from "path";

class ProductImagesService{
    #_model
    constructor(){
        this.#_model = productImages
    }

    
    async createImages (images) {
        try {
            if (!images[0].imageUrl) {
                return false;
            }
            images.forEach( async (element) => {
            const img = await this.#_model.insertMany({
                image:element.imageUrl,
                productId: element.productId
            })
        });
        return true
        } catch (error) {
            return false
        } 
    }


    async getOneImage(imageId){
        const image = await this.#_model.findById(imageId);
        return image;
    }


    async getAllImages(){
        const images = await this.#_model.find()
        return images
    }


    async deleteOneImage(imageId){
        const imageData = await this.#_model.findById({_id:imageId})
        fs.unlink(path.join(process.cwd(), 'uploads', imageData.image), (err) => {
            if (err) {
              throw err
            }
          })
        const data = await this.#_model.deleteOne({_id:imageId})
        return data
    }
}

export default new ProductImagesService()