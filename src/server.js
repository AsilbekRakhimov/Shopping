import express from 'express';
import { appConfig } from './config/app.config.js';
import { mongo } from './db/mongo.js';
import authRouter from './modules/auth/auth.routes.js';
import { ErrorHandlerMIddleware } from './middlewares/error-handler.middleware.js';
import categoryRouter from './modules/categories/category.routes.js';
import productRouter from './modules/products/product.routes.js';

const app = express()
app.use(express.json())

app.use("/api/v1", authRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", productRouter);

await mongo()

app.use(ErrorHandlerMIddleware)

app.listen(appConfig.port, appConfig.host, ()=>{
    console.log(`Server is running on port: ${appConfig.port}`);
})