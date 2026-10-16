import express from 'express';
import cors from 'cors';
import resumeRoutes from './routes/resume.routes.js';
import contactRoutes from './routes/contact.routes.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => {
  res.send('Portfolio Backend is running!');
});

app.use('/api/resume', resumeRoutes);
app.use('/api/contact', contactRoutes);

export default app;
