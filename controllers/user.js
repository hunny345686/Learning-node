export const createUser = async(rq,res)=>{
    const user = await User.create({
        fname:rq.body.fname,
        lname:rq.body.lname
    })
    return res.status(201).json({status:"done",user})
}