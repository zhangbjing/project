var express = require('express');
var router = express.Router();
var connection = require('../db/configMsql.js')

/* GET home page. */
router.post('/login_do', function(req, res, next) {
    let sql = 'select * from users where phone=? and password=?'
    connection.query(sql, [
        req.body.phone, 
        req.body.password
    ], (err, result) => {
        if (result.length >= 1) {
            res.cookie('phone', req.body.phone, { maxAge: 1000*60*60, httpOnly: true, path: '/'})
            res.json({
                code: 1,
                msg: '登陆成功'
            }) 
        } else {
            res.status(401).json({
                code: 0,
                msg: '登录失败'
            })
        }
    })
});
router.get('/userInfo', function(req, res, next) {
    let phone = req.cookies.phone
    let sql = 'select * from users where phone=?'
    if (phone) {
        connection.query(sql, [
            phone
        ], (err, result) => {
            if(result){
                res.json({
                    code: 1,
                    data: result
                }) 
            }
        })
    } else {
        res.status(401).json({
            code: 0,
            msg: '未登录没有权限'
        })
    }
});

module.exports = router;
