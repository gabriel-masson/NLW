
//no time_from e time_to precisar ser em segundos
const express = require("express")
const server = express()

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require("./pages")


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
server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))//receber os dados req body

  //rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes",saveClasses)
  //lista do servidor
  .listen(5500)

/*

*/