import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";

const formSchema: FormDataCollectionType = {
  formId: "validationForm",
  title: "Validation Form Sample",
  fields: [
    {
      fieldId: "username",
      type: "text",
      label: "Username",
      required: true,
      requiredMessage: "Username is mandatory", // Custom message
    },
  ],
};

const App = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formSchema} onSubmit={handleSubmit} />;
};

const Code = `import { DynamicForm, type FormDataCollectionType } from "react-forminate";

const formSchema: FormDataCollectionType = {
  formId: "validationForm",
  title: "Validation Form Sample",
  fields: [
    // <!-- truncate-start -->
    {
      fieldId: "username",
      type: "text",
      label: "Username",
      required: true,
      requiredMessage: "Username is mandatory", // Custom message
    },
    // <!-- truncate-end -->
  ],
};

const App = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formSchema} onSubmit={handleSubmit} />;
};`;

export const Code3 = () => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Validation Form"
      defaultTab="code"
    />
  );
};

export default Code3;
