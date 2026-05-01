import express from 'express';
import cors    from 'cors';
import dotenv  from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';
import visitorRoutes from './routes/visitor.js';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://abhishekjadhav07.vercel.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Fix Chrome DevTools CSP warning — respond to the well-known request
app.get('/.well-known/appspecific/com.chrome.devtools.json', (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({});
});

app.use(express.json());

// ── Routes ──────────────────────────────────────────────────
app.use('/api/contact', contactRoutes);
app.use('/api/visitor', visitorRoutes);

// Health check
app.get('/api/health', (_, res) =>
  res.json({ status: '🚀 Server is running', timestamp: new Date() })
);

// ── Start ───────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () =>
      console.log(`🚀 Server running → http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
