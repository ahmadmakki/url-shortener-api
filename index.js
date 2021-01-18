import express  from 'express';
import shortid from 'shortid';

const app = express();
app.use(express.json());
 
const urls = []
 
//READ Request Handlers
app.get('/', (req, res) => {res.send('Welcome to the API !!');});
 
//get all the URLs shortened
app.get('/api/urls', (req,res)=> {res.send(urls);console.log('urls')});
 
app.get('/api/urls/:id', (req, res) => {
const url = urls.find(c => c.id === parseInt(req.params.id));
 res.send(url);
});
 
//create a short url and return it to the user
app.post('/api/urls', (req, res)=> {
const url = {
originalUrl:req.body.orglUrl,
shorternUrl:'http://'+shortid.generate(),
id: urls.length + 1};
urls.push(url);
res.send(url);
console.log('shortened URL is created')
});

//update the original URL given its ID
app.put('/api/urls/:id', (req, res) => {
const url = urls.find(c=> c.id === parseInt(req.params.id));
url.originalUrl=req.body.orglUrl;
res.send(url);
console.log(`the original URL of ID ${req.params.id} is updated`)
});
 
//delete the shortened URL given its ID
app.delete('/api/urls/:id', (req, res) => {
const url = urls.find( c=> c.id === parseInt(req.params.id)); 
const index = urls.indexOf(url);
urls.splice(index,1);
res.send(url);
console.log(`the shortened URL of id ${req.params.id} is deleted`)
});
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}..`));