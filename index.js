const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({ ok: true }))

app.get('/notok', (req, res) => res.json({ ok: false }))

app.get('/username',(req,res) => res.json({ username: process.env.USERNAME }))

app.get('/userpass',(req,res) => res.json({ 
	userpass: process.env.USERPASS,
	username: process.env.USERPASS_USR,
	password: process.env.USERPASS_PSW,
	}))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app };