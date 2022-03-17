const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/characters',(req,res)=>{
    const url='https://api.sampleapis.com/avatar/characters';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/characters',{
            title:'Characters',
            name:'List of characters',
            data
        })
    })
})

module.exports=router;