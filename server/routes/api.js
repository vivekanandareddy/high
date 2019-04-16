const express = require('express')
const router = express.Router()

var fs = require('fs');
let papa = require('papaparse');

const file = fs.readFileSync('./assets/data/income.csv', 'utf8');

cdata = papa.parse(file,{ complete:(result)=>
                                {console.log('after parsing ');
                                console.dir(result.data); }});

router.get('/',(req,res)=>{
    res.send('From Api Route')
})

router.get('/csvdata',(req,res)=>{
    let cvdata =[];
    cvdata = cdata.data;
        console.log('before converting to json');
         console.log(cvdata);
    
         res.json(cvdata);
})

module.exports = router