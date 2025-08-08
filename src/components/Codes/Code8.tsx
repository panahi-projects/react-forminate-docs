import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";

const formSchema: FormDataCollectionType = {
  formId: "validationForm_checkbox",
  title: "Validation Form Checkbox",
  fields: [
    {
      fieldId: "languages",
      type: "checkbox",
      label: "Languages",
      required: true,
      validation: [
        {
          minItems: 1,
          message: "Select at least one option",
        },
        {
          maxItems: 3,
          message: "Select no more than three options",
        },
      ],
      options: [
        {
          value: "farsi",
          label: "Farsi",
        },
        {
          value: "arabic",
          label: "Arabic",
        },
        {
          value: "english",
          label: "English",
        },
        {
          value: "spanish",
          label: "Spanish",
        },
        {
          value: "russia",
          label: "Russia",
        },
      ],
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
    {
      fieldId: "languages",
      type: "checkbox",
      label: "Languages",
      required: true,
      // <!-- truncate-start -->
      validation: [
        {
          minItems: 1,
          message: "Select at least one option",
        },
        {
          maxItems: 3,
          message: "Select no more than three options",
        },
      ],
      // <!-- truncate-end -->
      options: [
        {
          value: "farsi",
          label: "Farsi",
        },
        {
          value: "arabic",
          label: "Arabic",
        },
        {
          value: "english",
          label: "English",
        },
        {
          value: "spanish",
          label: "Spanish",
        },
        {
          value: "russia",
          label: "Russia",
        },
      ]
    },
  ],
};

const App = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formSchema} onSubmit={handleSubmit} />;
};
`;

export const Code8 = () => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Validation Form"
      defaultTab="code"
    />
  );
};

export default Code8;
