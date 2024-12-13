const express = require('express');
const app = express();
const ambulances = require('./data/ambulances.json');

app.use(express.json());
app.get('/ambulances', (req, res) => {
    res.status(201).send(ambulances);
});

app.get('/ambulances/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const ambulance = ambulances.find(amb=> amb.id === id);
    res.status(201).send(ambulance);
});


app.post('/ambulances', (req, res) => {
    ambulances.push({
        id: ambulances.length + 1,
        name: req.body.name,
        location: req.body.location,
        status: req.body.status
    })
    
    res.status(201).send(ambulances);
});

app.put('/ambulances/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const ambulance = ambulances.find(amb => amb.id === id);
    ambulance.name = req.body.name;
    ambulance.location = req.body.location;
    ambulance.status = req.body.status;
    res.status(201).send(ambulance);
});

app.delete('/ambulances/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const ambulance = ambulances.find(amb => amb.id === id);
    ambulances.splice(ambulances.indexOf(ambulance), 1);
    res.status(201).send(ambulances);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});