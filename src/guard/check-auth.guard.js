export const CheckAuthGuard = (isAuth) => {
    return (req, res, next) => {

        if(!isAuth) {
            req.role = "user"

            next()
        }

        const { accessToken } = req.headers["authorization"]

    }
}
