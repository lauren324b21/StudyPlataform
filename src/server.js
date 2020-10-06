//dados

const proffys = [
    { name: "Diego Fernandes",
     avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
     whatsapp: "87981244808", 
     bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoasatravés de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
     subject: "Química", 
     cost:"20", 
     weekday: [0],
     time_from: [720],
     time_to: [1220]
    },

    { name: "Daniele Evangelista",
     avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
     whatsapp: "87981244808", 
     bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoasatravés de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
     subject: "Química", 
     cost:"40", 
     weekday: [1],
     time_from: [720],
     time_to: [1220]
    },

    { name: "Loiane Groner",
     avatar: "https://avatars3.githubusercontent.com/u/59545?s=400&u=f968d812d303a087cb6b23b7aa7766ef1a59559c&v=4", 
     whatsapp: "87981244808", 
     bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoasatravés de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
     subject: "Química", 
     cost:"60", 
     weekday: [1],
     time_from: [720],
     time_to: [1220]
    }

]


const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"


]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]


//funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1 
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")

}

function studyPage(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})

}

function pageGiveClasses(req, res){

    const data = req.query
    
    //se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty){

        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")

    }
    //se não, mostrar a página
    return res.render("give-classes.html", {subjects, weekdays})
}


//servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjuncks = require('nunjucks')
nunjuncks.configure("src/views", {
    express: server,
    noCache: true,
})


//inicio e configuração do servidor 
server
//configurar arquivos estáticos (css, scripts, images)
.use(express.static("public"))


//rotas de aplicação
.get("/", pageLanding)
.get("/study", studyPage)
.get("/give-classes", pageGiveClasses)

//start do servidor
.listen(5500)

