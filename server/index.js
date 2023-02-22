const express = require("express");
const app = express();
const db = require("mysql");
const cors = require("cors");

//CONECTANDO NO BANCO DE DADOS
const mysql = db.createPool({
  host: "localhost",
  port: 3306,
  user: "price",
  password: "Prince0912$",
  database: "price",
});

app.use(cors());
app.use(express.json());

//ROTA DE CADASTRO
app.post("/cadastrar", (req, res) => {
  const { name } = req.body;
  const { email } = req.body;
  const { pass } = req.body;

  function GetIfEmailExists(email) {
    let searchDataExists = `SELECT email FROM users WHERE email = ?`;

    mysql.query(searchDataExists, [email], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const emailExists = result[0].email;
        if (emailExists == email) {
        return true;
      } else {
        return false;
      }
    }
    });
  }

  if (GetIfEmailExists(email) == true) {
    let errorEmailExists = {error:"1", errorMessage:"e-mail já está cadastrado"}
    res.send(errorEmailExists);
  }
});

app.listen(3001, () => {
  console.log("rodando server");
});
