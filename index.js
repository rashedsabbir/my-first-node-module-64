
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello to myffsdf my world World!')
})
const users=[
    {id: 1, name: 'John', email: 'john@gmail.com'},
    {id: 2, name: 'John', email: 'john@gmail.com'},
    {id: 3, name: 'John', email: 'john@gmail.com'},
    {id: 4, name: 'John', email: 'john@gmail.com'},
    {id: 5, name: 'John', email: 'john@gmail.com'},
    {id: 6, name: 'John', email: 'john@gmail.com'},
    {id: 7, name: 'John', email: 'john@gmail.com'},
    {id: 8, name: 'John', email: 'john@gmail.com'},
]
app.get('/users', (req, res) => {
    if(req.query.name){
        const search =req.query.name;
        const matched=users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    
   else{
    res.send(users);
   }
})

app.get('/user/:id',(req, res)=>{
    console.log(req.params);
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id);
    res.send(user);
})

app.post('/user',(req, res)=>{
    console.log(req.body);
    const user=req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
