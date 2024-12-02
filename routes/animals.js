const express = require("express")
const router = express.Router()
const animals = require("../services/animals")

router.get("/", 
    async function(req,res, next){
        try{
            res.json(await animals.getDatas())
        }
        catch(err){
            next(err)
        }

        // res.json({"messages":"Animals router"})
})
router.post("/",
    async function(req, res, next){
        console.log("Post Body", req.body)
        try{
            res.json(await animals.create(req.body))
        }
        catch(err){
            next(err)
        }
}
)
module.exports = router
