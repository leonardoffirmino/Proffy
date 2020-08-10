const express = require('express')
const server = express()

const {pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses
    } = require('./pages')

//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})


server.use(express.urlencoded({extend:true}))
server.use(express.static("public"))

//Configurar arquivos estáticos (CSS,Imagens,Scripts)
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5500)



