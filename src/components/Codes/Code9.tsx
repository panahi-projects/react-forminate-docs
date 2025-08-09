import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";

const formSchema: FormDataCollectionType = {
  formId: "validationForm_custom",
  title: "Validation Form Custom",
  fields: [
    {
      fieldId: "currencyCode",
      type: "text",
      label: "Currency code",
      required: true,
      validation: [
        {
          custom: (value) => {
            // Must be all uppercase
            return value === (value as string).toUpperCase();
          },
          message: "Must be uppercase only",
        },
      ],
      _defaultValue: "USD", //valid input
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
  formId: "validationForm_checkbox",
  title: "Validation Form Checkbox",
  fields: [
    // <!-- truncate-start -->
    {
      fieldId: "currencyCode",
      type: "text",
      label: "Currency code",
      required: true,
      validation: [
        {
          custom: (value) => {
            // Must be all uppercase
            return value === (value as string).toUpperCase();
          },
          message: "Must be uppercase only",
        },
      ],
      _defaultValue: "USD", //valid input
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

export const Code9 = () => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Custom Validation Form"
      defaultTab="code"
    />
  );
};

export default Code9;
