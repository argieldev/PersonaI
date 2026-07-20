# Product Requirement Document

## Project Name

PersonAI

---

# Overview

PersonAI is an AI-powered workspace where users interact with an AI assistant through chat. Instead of only receiving text responses, the AI automatically creates the content of the dashboard through information talked about through chat.

The goal is to have a clean organization of important details while reducing manual organization by allowing users to describe or share what they want while the workspace stays synchronized automatically.

---

# Problem Statement

Most AI chatbots lose useful information inside a long conversation.

Users often need to manually copy information into:

- Notes
- Todo apps
- Calendars
- Project boards

or manually ask AI to save the information, which you by assumption tend to not even open.

---

# Goals

Primary Goals

- Build an AI workspace instead of a traditional chatbot.
- Automatically generate dashboard widgets.
- Allow editing through chat and widgets.
- Create a clean and responsive interface.

Secondary Goals

- Learn modern full-stack architecture.
- Practice AI integrations.
- Build portfolio-quality project.

---

# Target Users

- Students
- Developers
- Freelancers
- Small teams

---

# Minimum Viable Product (MVP)

The MVP includes only the core experience.

### Authentication

- Login
- Register

### Chat

- AI conversation
- Conversation History

### Dashboard

Supports:

- Notes
- Tasks
- Reminders
- Personal Characteristics
- Schedule

The AI can:

- Create widgets
- Edit widgets
- Delete widgets

### User Interface

- Responsive layout
- Dark mode

---

# Out of Scope

The following features will NOT be included in the MVP.

- Team collaboration
- File uploads
- Voice chat
- Mobile app
- AI memory across workspaces
- Third-party integrations

---

# Functional Requirements

### User

- Can create an account
- Can log in
- Can create multiple workspaces

### AI

The AI should:

- Understand natural language
- Create widgets
- Update widgets
- Remove widgets

### Dashboard

The dashboard should:

- Display widgets
- Persist changes
- Allow manual editing

---

# Non-functional Requirements

Performance

- Dashboard loads under 2 seconds
- Chat responses stream

Security

- JWT Authentication
- Password hashing
- Input validation

Scalability

- Modular backend
- API-first design

---

# Technical Stack

Frontend

- React
- Vite
- Tailwind
- React Router

Backend

- Node.js
- Express

Database

- MongoDB

Authentication

- JWT

AI

- OpenAI API

Deployment

- Vercel
- Railway

---

# Success Metrics

The MVP is considered successful if:

- Users can register.
- Users can chat with AI.
- AI creates dashboard widgets.
- Dashboard updates automatically.
- Data persists after refresh.
- Users can edit widgets manually.

---

# Future Features

- Calendar
- Kanban board
- Whiteboard
- File management
- Team workspaces
- AI memory
- Voice assistant
- Plugin system

---

# Risks

- AI creates incorrect widgets.
- Dashboard synchronization issues.
- Large conversations slow performance.
- High API costs.

---

# Version

Current Version

v0.1 (Planning)

Last Updated

July 21, 2026
