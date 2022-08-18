import app from '../app.js'

const port = 3009

app.listen(process.env.PORT || 3009, () => {
    console.log(`http://localhost:${port}/`)
})