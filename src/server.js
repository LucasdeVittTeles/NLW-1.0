let express = require("express")
const server = express()

// pegar o BD

let db = require("./database/db")
//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body
server.use(express.urlencoded({extended: true}))

//utilizando template engine
let nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
  express: server,
  noCache: true
})
//configurar caminhos da minha aplicaçao
//pagina inicial
// req: requisição
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    // req.query: query strings da nossa url
    //console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: o corpo do nosso formulario
    //console.log(req.body)

    const query = `
   INSERT INTO places ( 
       image,
       name,
       address,
       address2,
       state,
       city,
       items
   ) VALUES (?,?,?,?,?,?,?);
   `
   
   
   const values = [
   req.body.image,
   req.body.name,
   req.body.address,
   req.body.address2,
   req.body.state,
   req.body.city,
   req.body.Items
]

function afterInsertData(err){
    if(err){
        return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", { saved: true})
}

db.run(query, values, afterInsertData)
   //inserir dados no BD
})

server.get("/search-results", (req, res) => {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia 
        return res.render("search-results.html", {total: 0})
    }
//pegar os dados do BD

db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`,function(err, rows){
    if(err){
        return console.log(err)
    }

let total = rows.length
    return res.render("search-results.html", { places:rows, total:total})
})
})




//ligar o servidor

server.listen(3000)


