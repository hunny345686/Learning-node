import { vailidateToken } from "../services/authentication.js"

export function checkForAuthCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieVal = req.cookies[cookieName]
        if (!tokenCookieVal) {
            return next()
        }
        try {
            const userPayload = vailidateToken(tokenCookieVal)
            req.user = userPayload
        } catch (error) {
        }
        return next()
    }
}