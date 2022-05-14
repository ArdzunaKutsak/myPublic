import express from 'express';
import ReactDOM from 'react-dom/server';
// import { Header } from '../shared/Header';
import { indexTemplate } from '../../dist/server/indexTemplate';
import { App } from '../App';
// import { access } from 'fs';
const axios = require('axios')
require('dotenv').config();
const app = express();
// const ID = process.env.USER_ID;

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {

    res.send(
        indexTemplate(ReactDOM.renderToString(App()))
    );

})

app.get('/auth', async function(req, res) {


    axios({
            method: 'post',
            url: 'https://www.reddit.com/api/v1/access_token',
            data: `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
            auth: { username: process.env.USER_ID, password: 'qzMSiHKAlO7GhbxYTyhqDOnzcqp9Dg' },
            headers: { 'Content-type': 'application/x-www-form-urlencoded' },

        }).then(({ data }) => {

            res.send(
                indexTemplate(ReactDOM.renderToString(App()), data.access_token)
            );
        })
        .catch(console.log)

    // axios.post('https://www.reddit.com/api/v1/access_token',
    //         `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`, {
    //             auth: { username: process.env.USER_ID, password: 'qzMSiHKAlO7GhbxYTyhqDOnzcqp9Dg' },
    //             headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    //         }

    //     ).then(({ data }) => {
    //         console.log(data, 'WHATA FUCK')
    //         res.send(
    //             indexTemplate(ReactDOM.renderToString(App()), data.access_token)
    //         );
    //     })
    //     .catch(console.log)



})
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000')
})