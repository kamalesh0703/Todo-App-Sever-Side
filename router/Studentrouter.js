express = require("express");
let router = express.Router();
let apiSchema = require('../model/studentmodel')

router.post("/addTodo", (req, res) => {
    console.log("post called",req.body);
    apiSchema.insertMany([req.body])
    .then((result) => {
        console.log(result)

    }).catch((err) => {
        console.log(err)
    })
})

router.get('/getTodo', (request, response) => {
    apiSchema.find()
        .then(data => response.json(data))
        .catch(error => response.json(error))
})

router.delete('/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const employee=await apiSchema.findByIdAndDelete({_id: id})
        console.log(employee)
        res.json({msg:"success"})
    } catch (error) {
        next(error);
    }
});
router.put('/update/:id',async(req,res)=>{
   try {
        const { id } = req.params;
        console.log(id);
        const employee=await apiSchema.findByIdAndUpdate({_id: id},{
            name:req.body.name,
            title:req.body.title,
            description:req.body.description
        })
        res.json({
            "Status":"update Succesfully!"
        })
    } catch (error) {
        next(error);
    }
});
router.put('/complete/:id',async(req,res)=>{
    try {
         const { id } = req.params;
         console.log(id);
         const employee=await apiSchema.findByIdAndUpdate({_id: id},{
             name:req.body.name,
             title:req.body.title,
             description:req.body.description,
             status:req.body.status
         })
         res.json({
             "Status":"Completed!"
         })
     } catch (error) {
         next(error);
     }
 });

module.exports = router;