import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";

const formSchema: FormDataCollectionType = {
  formId: "validationForm_minLength_maxLength",
  title: "Validation Form Min/Max",
  fields: [
    {
      fieldId: "bio",
      type: "textarea",
      label: "Biography",
      minLength: 10,
      maxLength: 200,
      required: true,
      validation: [
        {
          minLength: 10,
          maxLength: 200,
          message: "Bio's length must be between 10 to 200 characters",
        },
      ],
      placeholder: "Tell us about yourself (10-200 chars)",
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
  formId: "validationForm_minLength_maxLength",
  title: "Validation Form Min/Max",
  fields: [
    // <!-- truncate-start -->
    {
      fieldId: "bio",
      type: "textarea",
      label: "Biography",
      minLength: 10,
      maxLength: 200,
      required: true,
      validation: [
        {
          minLength: 10,
          maxLength: 200,
          message: "Bio's length must be between 10 to 200 characters"
        }
      ],
      placeholder: "Tell us about yourself (10-200 chars)"
    }
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

export const Code5 = () => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Length Validation Form"
      defaultTab="code"
    />
  );
};

export default Code5;
