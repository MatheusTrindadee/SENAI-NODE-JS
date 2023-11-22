import express from 'express';
import colecaoUf  from '../dados/dados.js'; // Use um caminho relativo
const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf);
});
/*
app.get('/ufs/teste', (req, res) => {
    res.send({'teste': 'teste'})
  

})
*/
app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
let uf;

if(!(isNaN(idUF))){
 uf = colecaoUf.find(u=>u.id===idUF);
 if (!uf) {
    mensagemErro = "UF NÃO ENCONTRADA";
 }
 }else {
    mensagemErro = "Requisão inválida";
 }


   
if (uf) {
       res.json(uf);
}else {
    res.status(404).send({"erro": mensagemErro});
}
});



app.get('/ufs/:iduf', (req, res) => { 
    const idUF = req.params.iduf;
    res.send({"teste": `${idUF}`});

});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080 http://localhost:8080/ufs');
    console.log("http://localhost:8080/ufs/teste.")
    console.log("http://localhost:8080/ufs/14.")
});
