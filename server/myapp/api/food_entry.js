var express = require('express');
var router = express.Router();
var connection = require('../db/configMsql.js')

/* GET home page. */
router.post('/food_entry', function(req, res, next) {
    let sql = 'insert into food_entry (name, image, description, parent_id) values (?,?,?,?)'
    connection.query(sql, [
        req.body.name, 
        req.body.image,
        req.body.description,
        req.body.parent_id
    ], (err, result) => {
        if (err) {
            res.status(422).json({
                code: 0,
                msg: '创建失败'
            })
        } else {
            res.status(200).json({
                code: 1,
                data: {
                    id: 0
                }
            })
        }
    })
});
let toTreeJson = (data, parent_id, child_name) => {
    let obj = {};
    let newArr = [];
    for (var i = 0;i < data.length; i++) {
        obj[data[i].id] = data[i]
    }
    for (var key in obj) {
        if (obj[key][parent_id] === 0) {
            newArr.push(obj[key])
        } else {
            if ( !obj[obj[key][parent_id]][child_name]) {
               obj[obj[key][parent_id]][child_name] = [] 
            }
            obj[obj[key][parent_id]][child_name].push(obj[key])
        }
    }
    return newArr;
}
router.get('/food_entry', function(req, res, next) {
    let sql = 'select * from food_entry'
    connection.query(sql, [], (err, result) => {
        if(err){
            res.status(422).json({
                code: 0,
                msg: '创建失败'
            }) 
        } else {
            res.status(200).json({
                code: 1,
                data: toTreeJson(result, 'parent_id', 'child')
            }) 
        }
    })
});
router.get('/delete_row', function(req, res, next) {
    let sql = 'delete from food_entry where id=?'
    console.log(req.query.id)
    connection.query(sql, [
        req.query.id
    ], (err, result) => {
        if(err){
            res.status(422).json({
                code: 0,
                msg: '删除失败'
            }) 
        } else {
            res.status(200).json({
                code: 1,
                data: result
            }) 
        }
    })
});

module.exports = router;
