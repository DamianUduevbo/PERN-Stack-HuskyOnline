const express = require("express")
const pool = require("./pgsqldb")
const app = express()

const port = 5000

app.get('/', async (req, res) => {
    console.log(`getting...`)
    try {
        const allGames = await pool.query('SELECT * FROM "gamesTable"')
        //res
        //console.log(res.json(allGames.rows))
    }
    catch (err) {
        console.log(`Err: ${err}`)
    }
})

app.get('/games', async (req, res) => {
    console.log(`getting...`)
    try {
        const allGames = await pool.query('SELECT * FROM "gamesTable"')
        //res
        console.log(res.json(allGames.rows[0]), "=====")
    }
    catch (err) {
        console.log(`====\nErr: ${err} \n${Date.now()}`)
    }
})

const appListen = () => {
    console.log(`Connection started on port ${port}`)
    //getDat()
}

app.listen(port, appListen)
