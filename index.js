const express = require('express');
const app = express(); 

app.use(express.json()) // parse it into JSON

const medicalBills = [];

// GET request to retrieve all medical bills
app.get('/items', (req, res) => {
  res.json(medicalBills);
});

// POST request to add a new medical bill
app.post('/items', (req, res) => {
  
  const newBill = req.body
  if (!newBill.patientName || !newBill.patientAddress  || !newBill.hospitalName || !newBill.dateOfService || !newBill.billAmount) {
    res.status(400).send('Invalid request, missing required fields');
    return;
  } 
  
  medicalBills.push(newBill);
  res.json({ message: 'New medical bill added successfully' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

