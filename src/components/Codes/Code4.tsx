import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";

const formSchema: FormDataCollectionType = {
  formId: "validationForm_pattern",
  title: "Validation Form Sample",
  fields: [
    {
      fieldId: "username",
      type: "text",
      label: "Username",
      validation: [
        {
          pattern: "^[a-zA-Z0-9_]{5,20}$",
          message: "5-20 chars: letters, numbers, or underscores only.",
        },
      ],
      _defaultValue: "test", //validation fails
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
  formId: "validationForm_pattern",
  title: "Validation Form Sample",
  fields: [
    // <!-- truncate-start -->
    {
      fieldId: "username",
      type: "text",
      label: "Username",
      validation: [
        {
          pattern: "^[a-zA-Z0-9_]{5,20}$",
          message: "5-20 chars: letters, numbers, or underscores only.",
        },
      ],
      _defaultValue: "test" //validation fails
    },
    // <!-- truncate-end -->
  ],
};

const App = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formSchema} onSubmit={handleSubmit} />;
};
`;

export const Code4 = () => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Validation Form"
      defaultTab="code"
    />
  );
};

export default Code4;
