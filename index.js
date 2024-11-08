const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/todos", async function(req,res){
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        })
        return
    }

        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
        res.json({ 
            msg: "Todo created"
        })
    })

   

app.get("/todos", async function(req,res){
    const todo = await todo.find({})
    res.json({
        todo: []
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return
    }
    await todo.update({
        _id: req.body._id,
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})


app.listen(3000)