//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no BD

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto do banco de dados, para nossas operaçõesS


  //  db.serialize(() => {

    // com comandos sql eu vou: 

    //criar uma tabela 
//     db.run(`
//     CREATE TABLE IF NOT EXISTS places(
//      id INTEGER PRIMARY KEY AUTOINCREMENT,
//      image TEXT,
//      name TEXT,
//      address TEXT,
//      address2 TEXT,
//      state TEXT,
//      city TEXT,
//      items TEXT
//     );
// `)


//inserir dados na tabela 

//  const query = `
//  INSERT INTO places (
//      image,
//      name,
//      address,
//      address2,
//      state,
//      city,
//      items
//  ) VALUES (?,?,?,?,?,?,?);
//  `

//  const values = [
//      "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
//      "Papersider",
//      "Guilherme Gemballa, Jardim América",
//      "Número 260",
//      "Santa Catarina",
//      "Rio do Sul",
//      "Papéis e Papelão"
//  ]

//  function afterInsertData(err){
//      if(err){
//          return console.log(err)
//      }
//      console.log("Cadastrado com sucesso")
//      console.log(this)
//  }

//  db.run(query, values, afterInsertData)

//  db.all(`SELECT * FROM places`, function(err, rows){
//      if(err){
//          console.log(err)
//      }
//      console.log("Aqui estao seus registros:")
//      console.log(rows)
//  })


  // db.run(`DELETE FROM places WHERE id = ?`,[10], function(err){
  //     if(err){
  //        return console.log(err)
  //    }
  //     console.log("Registro deletado com sucesso!")
  // })

  //  })


