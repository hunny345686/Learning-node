import mongoose from "mongoose";

const { createHmac, randomBytes } = await import("node:crypto")

const { Schema } = mongoose;
const userSchema = new Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
    profilePic: {
        type: String,
        default: "./imgs/avt.avif"
    },
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    }
}, { timestamps: true })

userSchema.pre("save", function (next) {
    const user = this
    if (!user.isModified("password")) return
    const salt = randomBytes(16).toString()

    const hashedPaswword = createHmac("sha256", salt).update(user.password).digest("hex")
    this.salt = salt
    this.password = hashedPaswword
    next()
})

userSchema.static("matchPassword", async function (email, password) {
    const user = await this.findOne({
        email
    })
    if (!user) throw new Error("User Not found")

    const salt = user.salt

    const hashPassword = user.password

    const userProvidedhashedPaswword = createHmac("sha256", salt).update(password).digest("hex")
    if (hashPassword !== userProvidedhashedPaswword) throw new Error("Password is not match")

    return user
})

export const User = mongoose.model('user', userSchema);
