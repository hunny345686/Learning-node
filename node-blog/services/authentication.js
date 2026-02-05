import jwt from "jsonwebtoken"

const secret = "@PREMSINFH"

export function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role
    }

    return jwt.sign(payload, secret)
}

export function vailidateToken(token) {
    return jwt.verify(token, secret)


}