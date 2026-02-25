# 🌍 Universal QR Code Generator

A full-stack web application that allows users to generate **high-quality, scan-safe QR codes** for any portfolio or website link.

Users can:
- Sign up / Log in
- Create QR codes
- Customize QR design
- Download QR as PNG or SVG
- Track scan counts
- Manage all QRs in a personal dashboard

The generated QR works everywhere — mobile camera, WhatsApp, Instagram, LinkedIn, screens, and print.

---

## 🎯 What This Project Does

This project allows users to generate a QR code for **any URL**, including:

- Personal portfolio
- GitHub
- Notion
- Behance
- Company website
- Google Drive
- Resume PDF
- Any public website

Instead of directly storing the final URL inside the QR, the system uses a **redirect-based architecture**:

QR → yourdomain.com/q/{id} → redirects → final website


This makes the QR:
- Universal
- Future-proof
- Analytics-ready
- Editable without changing the QR image

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | Next.js 14 (React + TypeScript) |
| Styling | Tailwind CSS |
| QR Engine | qr-code-styling |
| Backend | Next.js Edge Functions |
| Database | Supabase (PostgreSQL) |
| Authentication | Supabase Auth |
| Hosting | Vercel |

---

## 🔐 Authentication

Users can:
- Sign up with email & password
- Log in securely
- Access protected dashboard routes

Authentication is handled using **Supabase Auth**.

Row Level Security (RLS) ensures:
- Users can only edit or view their own QR codes

---

## ⚙️ Features

### 1️⃣ Universal QR Generator
- Paste any valid website URL
- Generate scan-safe QR code
- Works on phone cameras and social apps

### 2️⃣ Scan-Safe Mode (Default ON)
To ensure maximum scan reliability:
- Error correction level H
- Proper quiet zone
- High contrast enforcement
- Logo size limit

### 3️⃣ QR Customization
Users can:
- Change QR color
- Choose dot style (square / rounded)
- Add optional logo
- Switch to advanced mode

### 4️⃣ Redirect-Based Architecture
QR stores:
yourdomain.com/q/{short_id}

On scan:
- Edge Function reads the short ID
- Fetches destination URL from database
- Instantly redirects (HTTP 302)

This ensures:
- Faster scans
- Editable links
- Analytics tracking

### 5️⃣ Dashboard
Each user can:
- View all created QR codes
- Edit destination URL
- Download QR (PNG / SVG)
- Copy short redirect link
- View scan count
- View last scanned time

### 6️⃣ Lightweight Analytics
For each QR:
- Total scan count
- Last scanned timestamp
- (Optional) Country data

---

## 🔒 Security & Protection

- Row Level Security (RLS) in Supabase
- Rate limiting on QR creation
- URL validation to prevent malicious links
- Edge-based redirects to avoid latency

---

## 📁 Project Structure
/app
/auth
/dashboard
/api
/q/[id]
/components
/lib
/supabase


---

## 🛠️ How It Works (Simple Flow)

1. User signs up / logs in
2. User enters any website URL
3. System generates short ID
4. Mapping saved in database:
   short_id → destination_url
5. QR generated for:
   https://yourdomain.com/q/short_id
6. When scanned:
   Edge function redirects to original website
7. Scan data is stored
8. User views data in dashboard

---

## 📦 Installation (Local Setup)

### 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/universal-qr-generator.git
cd universal-qr-generator
```
2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

4️⃣ Run Development Server
npm run dev

App will run at:

http://localhost:3000

### 🚀 Deployment

Recommended: Deploy on Vercel

Steps:

Push to GitHub

Connect project to Vercel

Add environment variables

Deploy

### 🧠 Why This Architecture?

This project was designed with production thinking:

Uses Edge Functions for fast redirects

Avoids premature optimization

Uses SQL-based authorization (RLS)

Keeps authentication and database unified

Uses modern full-stack stack (Next.js + Supabase)

### 🎓 What This Project Demonstrates

Full-stack development

Authentication & protected routes

Serverless backend architecture

Redirect-based QR systems

Database schema design

Performance awareness

Security considerations

Clean UI/UX thinking

### ❌ What This Project Does NOT Include (Intentionally)

No payment system

No mobile app

No heavy analytics dashboard

No over-engineered infrastructure

Focus is clarity, reliability, and scalability.

### 📌 Future Improvements

Custom domain support

Advanced analytics dashboard

Bulk QR generation

QR expiration feature

Dark mode

QR templates for business use
