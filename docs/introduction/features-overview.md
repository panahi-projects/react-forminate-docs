---
sidebar_position: 3
---

# Features Overview

# 🚀 Features Overview

React Forminate is more than just a form library — it's a **complete schema-driven form engine** built for modern React apps.

It combines developer ergonomics with powerful extensibility, giving you a clean, declarative way to build even the most complex forms.

---

## 🧩 JSON Schema-Based Forms

Define your entire form structure in a single JSON config:

- Fields, labels, defaults, types
- Validation rules
- Conditional visibility
- API-driven dropdowns and GridViews
- Field dependencies and dynamic logic

```json
{
  "id": "userForm",
  "fields": [
    {
      "fieldId": "firstName",
      "type": "input",
      "name": "firstName",
      "label": "First Name",
      "required": true
    },
    {
      "fieldId": "role",
      "type": "select",
      "name": "role",
      "label": "Role",
      "options": ["Admin", "User"]
    }
  ]
}
```

---

## 🧠 Smart Form Logic

Handle advanced logic like:

- Field visibility based on other values
- Disabling/enabling fields dynamically
- Fetching remote data and interpolating query parameters (e.g. `{{country}}`)
- Reacting to user interactions across multiple fields

---

## 🧱 Built-In Field Types

Includes a rich set of customizable field components:

- `InputField`, `SelectField`, `RadioField`, `CheckboxField`
- `DatePickerField` (with range/date formatting)
- `GridViewField` for tabular data display with pagination
- `CustomField` support to plug in your own

---

## 🔍 Dynamic Options from API

Fetch dropdown or list options from an API dynamically:

- Supports `GET/POST` requests
- Query string interpolation (`{{fieldName}}`)
- Retry and abort mechanisms
- Paginated APIs supported (e.g., `skip/count` or `page/limit`)

---

## 🦴 Skeleton Loading Support

Enable loading states while waiting for API responses:

- Use built-in skeletons per field type
- Or provide custom skeletons for more control
- Ideal for API-driven or large forms

---

## 🧩 Plugin-Ready Architecture

`React Forminate` supports plugin extensions:

- Add custom fields, themes, or validation logic via plugins
- Future-ready for low-code/visual form editors

---

## ⚙️ TypeScript-First Design

Enjoy full **IntelliSense**, strict types, and schema validation:

- Define strong types for schemas and field props
- Customize types with your own interfaces
- Easily extend the core types for specific app needs

---

## 🧪 Built-In Form Utilities

**React Forminate** provides easy-to-use hooks for common form tasks:

- `useForm()` for reading/updating form values
- `validateForm()` for triggering global validation
- `resetForm()`, `setFieldValue()`, `errors`, etc.

---

## 🧬 Fully Customizable

You can override styles, components, themes, or even layouts:

- Integrate with Tailwind, Chakra, or your own design system
- Use slot-based components and full field control
- Theme-aware and layout-friendly
