# Project Rules

## AI Rules

- The AI must never modify data without returning a valid action.
- The AI should only create widgets when information is meaningful.
- The AI should avoid creating duplicate widgets.
- The AI should preserve existing user data unless explicitly asked to change it.

---

## Dashboard Rules

- Every widget belongs to exactly one workspace.
- Widgets can be edited manually.
- Dashboard changes should persist automatically.
- Widget updates should appear immediately after AI actions.

---

## Chat Rules

- Conversations are stored chronologically.
- User messages cannot be edited after sending.
- AI responses should always be linked to the triggering message.

---

## Authentication Rules

- Every workspace belongs to one user.
- Users cannot access another user's data.
- Protected routes require authentication.

---

## General Rules

- Dark mode is the default theme.
- Responsive design is required.
- Performance is prioritized over animations.