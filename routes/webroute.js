const express = require('express')
const path = require('path')
const router = express.Router()
// const blogs = require("../data/blogs")
    
router.get('/checkout', (req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render("checkout")
  })

router.get('/contact', (req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render("contact")
  })

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render("home")
  })

router.get('/product', (req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render("product")
  })

router.get('/register', (req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render("register")
  })

router.get('/signup', (req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render("signup")
  })

router.get('/single', (req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render("single")
  })


router.get('/blogpost/:slug', (req, res) => {
        MyBlog=blogs.filter((e)=>{
          return e.slug=req.params.slug // return content of who have slug
        })
        console.log(MyBlog)
        res.sendFile(path.join(__dirname,"../templates/blogpage.html"))
      })

module.exports = router