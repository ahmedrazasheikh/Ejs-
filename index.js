import express from 'express';
const app = express()
const port = process.env.PORT || 8000
app.set('view engine','ejs')
import Main from './Router/homeRouter.js'
app.use('/', Main)
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})