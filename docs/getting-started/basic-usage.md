---
sidebar_position: 2
---

# 🧩 Basic Usage

Getting started with **React Forminate** is straightforward. All you need is a simple form schema and the `DynamicForm` component.

---

### ✨ Quick Start Example

Here’s a minimal example to help you hit the ground running:

```tsx
import { DynamicForm } from "react-forminate";

const formData = {
  formId: "SimpleForm",
  title: "Simple Form Example",
  fields: [
    {
      fieldId: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your name",
    },
    {
      fieldId: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "Enter your email",
    },
    {
      fieldId: "dob",
      label: "Date of Birth",
      type: "date",
    },
  ],
};

const App = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };

  return <DynamicForm formData={formData} onSubmit={handleSubmit} />;
};

export default App;
```

### 💡 How It Works

- `DynamicForm`: Renders the form based on the provided `formData` schema.
- `formData`: A JSON object that defines the fields, labels, types, and validation rules.
- `onSubmit`: A callback function that receives the form values and a validity flag when the user submits the form.

### ✅ Notes

- There's no need to manually manage state — `react-forminate` handles it internally.
- This setup does not require wrapping in `FormProvider` unless you're using `useForm()` manually.
- You can customize styles and field behavior as needed — see the Field Components and Customization sections for more advanced use cases.
