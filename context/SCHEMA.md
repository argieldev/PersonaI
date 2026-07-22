# Database Schema

## Status
To be decided as frontend and backend development progresses.

---

# Entities

## User

Purpose:
Stores account information and authentication data.

Possible fields:
- _id
- username
- email
- password (hashed)
- createdAt
- updatedAt

Status:
Planned

---

## Workspace

Purpose:
Stores the user's personal AI workspace.

Possible fields:
- _id
- userId
- name
- createdAt
- updatedAt

Status:
Needs more planning

Questions:
- Can a user have multiple workspaces?
- What customization can a workspace have?
- How are widgets stored?

---

## Messages

Purpose:
Stores AI conversations.

Possible fields:
- _id
- workspaceId
- sender
- content
- timestamp

Status:
Needs more planning

Questions:
- Are conversations grouped?
- Should messages be permanent?
- How much AI history should be stored?

---

## Widgets

Purpose:
Stores user-created workspace components.

Possible fields:
- _id
- workspaceId
- type
- settings
- position

Status:
Needs more planning

Questions:
- What types of widgets exist?
- How customizable are they?
- How is widget data stored?

---

# Relationships

Current assumption:

User
    |
    | 1:M
    |
Workspace
    |
    | 1:M
    |
Messages

Workspace
    |
    | 1:M
    |
Widgets