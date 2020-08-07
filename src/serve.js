//dados
const proffys = [
    {
       name: "Diego Fernandes",
       avatar: "https://github.com/diego3g.png", 
       whatsapp: "900000000", 
       bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
       subject: "Química", 
       cost: "20", 
       weekday: [0], 
       time_from: [720], 
       time_to: [1200]
     },
     {
       name: "Mayk Brito",
       avatar: "https://github.com/maykbrito.png", 
       whatsapp: "900000000", 
       bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
       subject: "Química", 
       cost: "20", 
       weekday: [1], 
       time_from: [720], 
       time_to: [1200]
     }
   ]
   const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
  ]

  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

//funcionalidades
function getSubjects(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
  //essa função serve para mostrar o valor do subject
}

function pageLanding(req,res){
    //mudança feita por causa no nunjucks
    //return res.sendFile(__dirname + "/views/index.html")
    return res.render("index.html")
}
function pageStudy(req,res){
  //o query recebe um objetos com asinformações preenchida do form ex console.log(req.query)
    const filters = req.query
    return res.render( "study.html",{proffys,filters,subjects,weekdays})
    
}

function pageGiveClasses(req,res){
    const data = req.query //console.log(dados)
    //se tiver dados add
    
  const isNotEmpty = Object.keys(data).length != 0

  if(isNotEmpty) {

    data.subject = getSubjects(data.subject)
    proffys.push(data)
    //apos acrecentar um proff vai mostrar na outa pag
    return res.redirect("/study")
  }
   
    return res.render( "give-classes.html",{subjects,weekdays})
}



//no time_from e time_to precisar ser em segundos
const express = require("express") 
const server = express()
const nunjucks = require("nunjucks")//importando o nunjuks(template engine)

//config nunjucks
nunjucks.configure('src/views', {
  express: server,
  noCache: true 
})
//esse estatic signnifica que esse arquivos estaticos(css,js esses arquirvos ) devera ser mostrado
//esse get é necessario pois a pag pede o / (isso é o que eu vou receber mas o que u vou dar?)é esse return res, mais pra frente eu vou enviar dados e é por esse req que ira fazer isso
    
 //esse get sera eito para cada requisição 
 //configurar arquivos estaticos(css scripts imagens)
server.use(express.static("public"))

//rotas da aplicação
.get("/",pageLanding)    
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.listen(5500)
 
/*

*/