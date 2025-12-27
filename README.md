#  Mini Task — User Data Form + MongoDB

A lightweight full-stack mini task built with **Next.js (App Router)** and **MongoDB (Mongoose)** to practice API handling, database integration, and frontend-backend data flow.

##  Features
- Collects **Username, GitHub link & Portfolio link**
- Sends data to a **Next.js API Route**
- Stores data in **MongoDB using Mongoose**
- Shows saved data on frontend after successful submission
- Console logging for debugging practice

---

##  Tech Stack
- **Next.js 16.1.1 (Turbopack)**
- **React (Client Component)**
- **MongoDB Atlas**
- **Mongoose**
- **Tailwind CSS**

---

##  Project Structure
```
/app/form/page.jsx           → Frontend form UI
/app/api/userdata/route.js   → API route to receive & save data
/lib/db.js                  → MongoDB connection setup
/model/Drill.js             → Mongoose schema & model
```

---

##  Setup Instructions

### 1️ Install dependencies
```sh
npm install mongoose
```

### 2️ Add environment variable in `.env`
```
MONGODB_URI = <Your MongoDB Atlas Connection String>
```

### 3️ Run the project
```sh
npm run dev
```

---

##  API Route Example (`POST`)
```js
export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const saved = await Drill.create(data);
  return NextResponse.json({ success: true, user: saved });
}
```

---

##  What This Task Helps You Practice
- API request handling in Next.js
- JSON parsing
- Database insert operations
- State update after API success
- Debugging using `console.log`

---

##  Notes
- Make sure you're reading the correct response key (`result.user`)
- This project is created for learning and interview preparation.

---

##  Connect With Me
- **Linkedin:** https://www.linkedin.com/in/raeen-saifi-a8b6172a8
- **Portfolio:** https://raeen-s-portfolio.vercel.app/

---

###  Built by Raeen Fatima 
*Keep practicing, keep improving, Inshallah 🚀*
