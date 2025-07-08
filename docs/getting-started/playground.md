---
sidebar_position: 3
---

# Playground / Live Demo

Want to see **React Forminate** in action? Jump into the interactive playground and experiment with form schemas, validation rules, and layouts — all in real-time.

---

### 🚀 Try It Live

[🔗 Open Playground on CodeSandbox](https://codesandbox.io/s/react-forminate-demo) <!-- Replace this with your actual demo URL -->

> The playground lets you edit the `formData` schema and see the form update instantly. It’s a great way to test fields, validation, layouts, and custom components.

---

### 🧑‍💻 Sample Schema

Here’s an example of what you can play with:

```ts
const formData = {
  title: "Demo Form",
  formId: "demoForm",
  fields: [
    {
      fieldId: "username",
      label: "Username",
      type: "text",
      required: true,
      placeholder: "Enter your username",
    },
    {
      fieldId: "subscribe",
      label: "Subscribe to newsletter",
      type: "checkbox",
    },
    {
      fieldId: "birthdate",
      label: "Birthdate",
      type: "date",
    },
  ],
};
```

### 💻 Set Up a Local Playground

If you'd rather explore locally, follow these steps:

1. Create a new React project using Vite or Create React App.
2. Install the library:

   ```bash
   npm install react-forminate
   ```

3. Replace the App.tsx content with a basic DynamicForm example.
4. Run the app and experiment with different form schemas!

### 📚 Want Ideas?

Check out the Built-in Fields section to see which fields are available out-of-the-box and how to use them in your playground.

**Happy form-building! 🎉**
