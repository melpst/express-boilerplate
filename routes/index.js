const {Router} = require('express')

const router = Router()

router.get('/', (req,res) => res.send('hello world'))

router.post('/', (req,res) => {
    console.log(req)
    res.send({
        header: req.headers,
        body: req.body,
        ip: req.ip,
        url: req.originalUrl
    })
})

module.exports = router
