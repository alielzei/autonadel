const express = require('express')
const app = express()
const fs = require('fs')

const path = require('path');

const conf = {
    port: 3001
}

app.use(express.static(path.resolve(__dirname, './client/build')));

//serving the api
app.use('/api', require('./api'))

// unknown routes go back to the frontend to enable refreshes on the frontend
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(conf.port, () => {
    console.log('listening')
})