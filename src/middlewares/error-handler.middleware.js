export const ErrorHandlerMIddleware = (err, req, res, next) =>{
    if (err.isException) {
        res.status(err.status).json({
            name:err.name,
            message:err.message
        })
        return ;
    }
    // next();

    // res.status(500).json({
    //     message:"Server bilan bog'liq xatolik"
    // })

}