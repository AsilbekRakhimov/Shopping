import express from 'express';
import { appConfig } from './config/app.config.js';
import { mongo } from './db/mongo.js';
import { ErrorHandlerMIddleware } from './middlewares/error-handler.middleware.js';
import router from './routes/index.routes.js';

const app = express()
app.use(express.json())

app.use("/", router);

await mongo()
app.use(ErrorHandlerMIddleware)

app.all("*", (req, res) => {
    res.status(404).send({
        message:"Url is not found"
    })
})


app.listen(appConfig.port, appConfig.host, ()=>{
    console.log(`Server is running on port: ${appConfig.port}`);
})