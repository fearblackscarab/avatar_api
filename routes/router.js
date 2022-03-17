const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.use(express.static('public'));
const characterRoute=require('./avatarRoutes/characterRoute');
const episodeRoute=require('./avatarRoutes/episodeRoute');
const questionRoute=require('./avatarRoutes/questionRoute');
const triviaRoute=require('./avatarRoutes/triviaRoute');

router.use('/',characterRoute);
router.use('/episodes',episodeRoute);
router.use('/questions',questionRoute);
router.use('/trivia',triviaRoute)

router.get('/',(req,res)=>{
    const url='https://api.sampleapis.com/avatar/info';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/home',{
            title:'Home',
            name:'Avatar: The Last Airbender',
            data
        })
    })
});




module.exports=router;