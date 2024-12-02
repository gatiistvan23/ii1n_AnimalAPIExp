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
})

router.put("/:id",
    async function(req, res, next){
        console.log("Post Body", req.body)
        try{
            res.json(await animals.update(req.params.id,req.body))
        }
        catch(err){
            next(err)
        }
})
router.patch("/:id",
    async function(req, res, next){
        console.log("Post Body", req.body)
        try{
            res.json(await animals.update(req.params.id,req.body))
        }
        catch(err){
            next(err)
        }
})
router.delete("/:id",
    async function(req, res, next){
        console.log("Post Body", req.body)
        try{
            res.json(await animals.delete(req.params.id))
        }
        catch(err){
            next(err)
        }
})
module.exports = router
