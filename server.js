const express = require('express')
const res = require('express/lib/response')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    {
      title: 'J',
      message: 'avaScript'
    },
    {
      title: 'H',
      message: 'tml5'
    },
    {
      title: 'C',
      message: 'SS3'
    },
    {
      title: 'N',
      message: 'odeJS'
    },
    {
      title: 'P',
      message: 'ostgreSQL'
    },
    {
      title: 'L',
      message: 'ógica de programação'
    }
  ]
  const subtitle = 'Minhas habilidades abaixo'
  res.render('pages/index', {
    qualities: items,
    subtitle: subtitle
  })
})
//render = renderizar o site
//req = requisição do site
//res = resposta
app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.get('/projetos', function (req, res) {
  res.render('pages/projects')
})

app.listen(8080)
console.log('Servidor On')
