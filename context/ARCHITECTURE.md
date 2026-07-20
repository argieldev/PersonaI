# Architecture Document

## Overview

PersonAI follows a client-server architecture.

The frontend communicates with the backend through REST APIs. The backend manages authentication, AI interactions, workspace logic, and database operations.

---

# System Architecture

                +----------------+
                |    Browser     |
                +-------+--------+
                        |
                        |
                React Frontend
                        |
                 HTTP / REST API
                        |
                Express Backend
            +-----------+------------+
            |                        |
      MongoDB Database         OpenAI API

---

# Frontend

Framework

- React
- Vite
- Tailwind CSS

Responsibilities

- Display dashboard
- Display chat
- Handle authentication
- Render widgets
- Manage application state

---

# Backend

Framework

- Node.js
- Express

Responsibilities

- Authentication
- AI processing
- Workspace management
- Widget management
- Database operations

---

# Database

Stores

- Users
- Workspaces
- Conversations
- Widgets

---

# AI Flow

1. User sends a message.
2. Backend receives the message.
3. Backend sends the conversation to the AI.
4. AI returns:
   - Chat response
   - Dashboard actions
5. Backend updates MongoDB.
6. Frontend refreshes affected widgets.

---

# Authentication

- JWT
- Password hashing
- Protected routes

---

# API Structure

- To be finalized

/auth
/chat
/workspaces
/widgets
/users

---

# Data Flow

User
↓

React

↓

Express

↓

OpenAI + MongoDB

↓

Express

↓

React

↓

Updated Dashboard

---

# Folder Structure

- To be finalized

client/
    src/
        components/
        pages/
        hooks/
        services/

server/
    routes/
    controllers/
    middleware/
    models/
    services/

---

# Future Architecture

- WebSockets
- Background jobs
- Caching
- AI memory
- Plugin system