const express =require('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req,res) => res.send('Hello, world!'))
app.get('/delivery', (req,res) => res.send('Delivery is OK'))
app.get('/error', (req,res) => res.status(500).send('Interneal Server Error'))

app.listen(port, () => console.log('Test app listening at http://localhost:${port}'))

module.exports=app