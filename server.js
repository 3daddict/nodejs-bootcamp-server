const express = require('express');
const dotenv = require('dotenv');

//Load env
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
})

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
})

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});