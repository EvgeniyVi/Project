const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt-nodejs')

const models = require('../models')


//POST authorized

router.post('/register',(req,res)=>{
    const login = req.body.Login;
    const password = req.body.Password;
    const ConfirmPassword = req.body.ConfirmPassword;

    if (!login || !password || !ConfirmPassword) {
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены!',
            fields: ['login', 'password', 'ConfirmPassword']
        });
    } else if (login.length < 3 || login.length > 16) {
        res.json({
            ok: false,
            error: 'Длина логина от 3 до 16 символов!',
            fields: ['login']
        });
    } else if (password !== ConfirmPassword) {
        res.json({
            ok: false,
            error: 'Пароли не совпадают!',
            fields: ['password', 'ConfirmPassword']
        });
  }else{
        bcrypt.hash(password,null,null,(err,hash)=> {
            models.User.create({
                login,
                password: hash
            }).then(user => {
                console.log(user)
                res.json({
                    ok: true
                })
            }).catch(err => {
                console.log(err)
                res.json({
                    ok: false,
                    error: 'Пользователь с такими ником иуже существует'
                });
            })
        })
    }

})

module.exports = router;
