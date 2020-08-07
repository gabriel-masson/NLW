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

function pageLanding(req,res){
    return res.sendFile(__dirname + "/views/index.html")
}
function pageStudy(req,res){
    return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasses(req,res){
    return res.sendFile(__dirname + "/views/give-classes.html")
}



//no time_from e time_to precisar ser em segundos
const express = require("express") 
const serve = express()
//esse estatic signnifica que esse arquivos estaticos(css,js esses arquirvos ) devera ser mostrado
//esse get é necessario pois a pag pede o / (isso é o que eu vou receber mas o que u vou dar?)é esse return res, mais pra frente eu vou enviar dados e é por esse req que ira fazer isso
    
 //esse get sera eito para cada requisição 
serve.use(express.static("public"))
.get("/",pageLanding)
    
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.listen(5500)
 
/*

*/