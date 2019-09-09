const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt-nodejs')

const models = require('../models')


//POST register

router.post('/register', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    const ConfirmPassword = req.body.ConfirmPassword;

    if (!login || !password || !ConfirmPassword) {
        const fields = [];
        if (!login) fields.push('login');
        if (!password) fields.push('password');
        if (!ConfirmPassword) fields.push('ConfirmPassword');

        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены!',
            fields
        });
    /*} else if (!/^[a-zA-Z0-9]+$/.test(login)) {
        res.json({
            ok: false,
            error: 'Только латинские буквы и цифры!',
            fields: ['login']
        });*/
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
    } else if (password.length < 5) {
        res.json({
            ok: false,
            error: 'Минимальная длина пароля 5 символов!',
            fields: ['password']
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


//Post auth
router.post('/login',(req,res)=> {
    const login = req.body.login;
    const password = req.body.password;
    if (!login || !password) {
        res.json({
            ok: false,
            error: '*Заполните поля для входа',
            fields: ['login', 'password']
        });
    }else{
        models.User.findOne({
            login
        }).then(user=>{
            if(!user) {
                res.json({
                    ok: false,
                    error: "Неверный логин или пароль",
                    fields: ['login', 'password']
                })
            } else{
                    bcrypt.compare(password,user.password,(err,result)=>{
                       if(!result){
                           res.json({
                               ok: false,
                               error: "Неверный логин или пароль",
                               fields: ['login', 'password']
                           })
                       }else{
                           req.session.userId = user.id;
                           req.session.userLogin = user.login
                           res.json({
                               ok:true
                           })
                       }
                    })
                }
        }).catch(err => {
                console.log(err)
                res.json({
                    ok: false,
                    error: 'Ошибка'
                });
            })
    }

});

//GET for logout

router.get('/logout',(req,res)=>{
    if(req.session){
        req.session.destroy(()=>{
            res.redirect("/")
        })
    }else{
        res.redirect("/");
    }
})

module.exports = router;
