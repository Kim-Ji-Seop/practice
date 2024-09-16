import express from 'express';
import userRoute from './route/userRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});