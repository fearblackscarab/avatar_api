const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/',(req,res)=>{
    const url='https://api.sampleapis.com/avatar/questions';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/questions',{
            title:'questions',
            name:'List of questions',
            data
        })
    })
});

module.exports=router;