const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
});
router.get('/movies', function(req, res) {
    res.send('["sholay","titanic","war","wanted"]')
});

router.get('/movies/:indexNumber', function(req, res) {
    let movies=["sholay","titanic","war","wanted"]
    let movieIndex=req.params.indexNumber;
    if (movieIndex>movies.length-1){
        res.send('"doesnt exist"')
    }else {
      res.send(movies[movieIndex])
    }
});
router.get('/films', function(req, res) {
    res.send([{id:1,name: 'sholay'},{id:2,name: 'titanic'},{id:3,name: 'war'},{id:4,name: 'wanted'}])
});
router.get('/films/:filmId', function(req, res) {
       let film=[{id:1,name: 'sholay'},{id:2,name: 'titanic'},{id:3,name: 'war'},{id:4,name: 'wanted'}]
       let value=req.params.filmId;
        let found=false;
        for ( i = 0; i < film.length; i++) {
            if( film[i].id==value){
                found=true
                res.send(film[i])
                break
            }
        }
        if(found==false) {
            res.send('no films exists with this id')
        }
});








module.exports = router;
