import { productImages } from "./product-image.schema.js"

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
}

export default new ProductImagesService()