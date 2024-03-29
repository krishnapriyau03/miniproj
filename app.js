const express = require('express')
const app = express()
const port = 3000

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html')
})

app.get('/css', (req, res) => {
    res.sendFile(__dirname + '/login.css')
  })
 
  app.get('/indoor', (req, res) => {
  // Replace 'https://example.com' with the URL of the page you want to redirect to
  res.sendFile(__dirname + '/indoor.html');
});
app.get('/option', (req, res) => {
  // Replace 'https://example.com' with the URL of the page you want to redirect to
  res.sendFile(__dirname + '/option.html');
});

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})