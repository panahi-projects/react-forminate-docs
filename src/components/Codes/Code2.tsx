import { DynamicForm } from "react-forminate";
import type { FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";

const formSchema: FormDataCollectionType = {
  formId: "simpleForm",
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

export const App = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formSchema} onSubmit={handleSubmit} />;
};

export const Code = `import { DynamicForm } from "react-forminate";
import type { FormDataCollectionType } from "react-forminate";

const formSchema: FormDataCollectionType = {
  formId: "simpleForm",
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

export const App = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formSchema} onSubmit={handleSubmit} />;
};
`;

export const Code2 = () => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Sample Form"
      defaultTab="code"
    />
  );
};

export default Code2;
