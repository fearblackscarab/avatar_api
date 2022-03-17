const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/:id',(req,res)=>{
    const id=req.params.id;
    const url=`https://api.sampleapis.com/avatar/questions/${id}`;
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/trivia',{
            title:`trivia`,
            name:`${data.question}`,
            pageId:id,
            data
        })
    })
});

module.exports=router;