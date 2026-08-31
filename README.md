# Portfolio Website (MERN Stack)

This is my personal **Portfolio** website built with **MERN Stack**. It is designed to showcase my web development skills, projects, and technical expertise. The portfolio includes a fully functional contact form that allows visitors to reach out directly. Messages are stored securely in **MongoDB**. A confirmation email is sent to the user via **Nodemailer**, letting them know their message has been received. This ensures reliable communication and a professional user experience.

**Live Demo**: [https://prinsipekumar.is-a.dev](https://prinsipekumar.is-a.dev)

---

## Features

- Responsive design for desktop and mobile with **Bootstrap**
- Theme toggle icon for switching between light/dark modes
- Smooth UI effects (typewriter animations, fade transitions)
- Project showcase with **source code** and **live demo**
- Integrated contact form for professional inquiries using **MongoDB** as a database and **Nodemailer** to send confirmation emails
- Fully deployed on **Vercel**

---

## Tech Stack

### Frontend

- React.js
- Bootstrap
- CSS
- Vite

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose

### Deployment

- Vercel

### Email Service

- Nodemailer

---

## Getting Started

To run the project locally:

1. **Clone the Repository**

```bash
git clone https://github.com/prinsipekumar/Portfolio.git
cd Portfolio
```

2. **Install Client Dependencies**

```bash
cd client
npm install
npm run dev
```

3. **Install Server Dependencies**

```bash
cd ../server
npm install
node server.js
```

4. **Configure Environment Variables**

Create `.env` file for `server`. Include:

- CLIENT_URL=your-client-url
- MONGODB_URI=your-mongodb-connection-string
- PORT=your-port
- EMAIL=your-email
- PASS=your-password

---

## Contact Me

If you’d like to connect, collaborate, or explore my work further:

- Email: prinsipekumar@gmail.com
