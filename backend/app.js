const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'school-backend' });
});

// Importar rutas base
// app.use('/api/users', require('./src/modules/users/user.routes'));

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
