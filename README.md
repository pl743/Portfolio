# Parth Lavti — Personal Portfolio

A modern, responsive personal portfolio built with the MERN stack to showcase my projects, technical skills, education, experience, certifications, and achievements.

**Live Demo:** https://parth-lavti.vercel.app/

## Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- **Interactive UI** — Modern design with light/dark theme support.
- **About Me** — Introduction and professional background.
- **Skills Showcase** — Technical skills and development expertise.
- **Projects** — Displays projects with descriptions and relevant links.
- **Education & Experience** — Academic background and internship experience.
- **Certificates & Achievements** — Highlights certifications and accomplishments.
- **Contact Form** — Allows visitors to send messages, which are stored in MongoDB.
- **Email Notifications** — Uses Nodemailer for contact form notifications.
- **Resume Download** — Download resume in PDF and DOCX formats.
- **React Router** — Separate pages for projects, skills, and certificates.

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- CSS
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer

### Deployment
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

## Project Structure

```text
Portfolio/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── about/
│   │   │   ├── certificate/
│   │   │   ├── contact/
│   │   │   ├── education/
│   │   │   ├── experience/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── project/
│   │   │   └── skills/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.production
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── files/
│   ├── package.json
│   └── .env
│
└── README.md
```

## Author

**Parth Lavti**

- GitHub: [pl743](https://github.com/pl743)
- LinkedIn: [parthlavti20](https://www.linkedin.com/in/parthlavti20/)

---

If you find this project interesting, feel free to explore the live portfolio and connect with me!
