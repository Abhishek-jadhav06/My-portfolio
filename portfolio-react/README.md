# 🚀 Abhishek Jadhav — Portfolio (React + JavaScript + Node.js)

Full-stack portfolio built with **React · JavaScript · Node.js · Express · MongoDB**

---

## 📁 Project Structure

```
portfolio-react/
├── client/                         ← React + JavaScript (Vite)
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx           ← Fixed nav, active section tracking, mobile menu
│       │   ├── Hero.jsx             ← Animated hero, wave emoji, avatar ring
│       │   ├── About.jsx            ← Bio, stats, tabbed tech stack with icons
│       │   ├── Projects.jsx         ← Filter buttons + project cards
│       │   ├── Experience.jsx       ← Experience/Education timeline with tab switch
│       │   ├── Contact.jsx          ← Form → POST /api/contact, direct links
│       │   └── Footer.jsx
│       ├── data/
│       │   └── portfolioData.js     ← 🔑 Edit ALL your content here
│       └── styles/
│           └── global.css
│
└── server/                         ← Node.js + Express + MongoDB
    └── src/
        ├── models/
        │   ├── Contact.js           ← Mongoose schema for messages
        │   └── Visitor.js           ← Visitor counter schema
        ├── controllers/
        │   ├── contactController.js ← Save message + email notification
        │   └── visitorController.js ← Increment & get visitor count
        └── routes/
            ├── contact.js           ← POST /api/contact, GET /api/contact
            └── visitor.js           ← POST /api/visitor/increment, GET /api/visitor/count
```

---

## ⚡ Quick Start

### Step 1 — Install all dependencies
```bash
npm run install:all
```

### Step 2 — Configure environment
```bash
cd server
cp .env.example .env
# Open .env and fill in your MongoDB URI and Gmail credentials
```

### Step 3 — Run dev servers
```bash
# From root — starts both React (port 5173) and Express (port 5000)
npm run dev
```

Open → **http://localhost:5173**

---

## 🌐 API Endpoints

| Method | URL                        | Description                  |
|--------|----------------------------|------------------------------|
| GET    | /api/health                | Server health check          |
| POST   | /api/contact               | Submit contact form message  |
| GET    | /api/contact               | Get all messages (admin)     |
| POST   | /api/visitor/increment     | Increment visitor count      |
| GET    | /api/visitor/count         | Get total visitor count      |

---

## ✏️ Customise Your Content

Edit **`client/src/data/portfolioData.js`** to update:
- Personal info, links, bio
- Tech stack icons
- Projects (title, description, tags, GitHub link)
- Experience & education

---

## 🛠 Tech Stack

| Layer     | Technology                      |
|-----------|---------------------------------|
| Frontend  | React 18, JavaScript, Vite      |
| Styling   | Plain CSS with CSS Variables    |
| Backend   | Node.js, Express.js             |
| Database  | MongoDB (Mongoose ODM)          |
| Email     | Nodemailer + Gmail App Password |

---

## ☁️ Deployment

- **Client** → [Vercel](https://vercel.com) — just connect your GitHub repo
- **Server** → [Render](https://render.com) or [Railway](https://railway.app)
- **Database** → [MongoDB Atlas](https://cloud.mongodb.com) (free tier)
