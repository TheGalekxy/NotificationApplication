require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.use('/api/', require('./routes/hello'))
app.use('/sms/', require('./routes/sendSms'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})