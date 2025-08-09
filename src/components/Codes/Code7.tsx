import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";

const formSchema: FormDataCollectionType = {
  formId: "validationForm_date",
  title: "Validation Form Date",
  fields: [
    {
      fieldId: "arrivalDate",
      type: "date",
      label: "Arrival Date",
      required: true,
      validation: [
        {
          minDate: "2025-01-01",
          maxDate: "2026-12-31",
          message: "Must be after January 1, 2000 and before 2024",
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
  formId: "validationForm_date",
  title: "Validation Form Date",
  fields: [
    // <!-- truncate-start -->
    {
      fieldId: "arrivalDate",
      type: "date",
      label: "Arrival Date",
      required: true,
      validation: [
        {
          minDate: "2025-01-01",
          maxDate: "2026-12-31",
          message: "Must be after January 1, 2000 and before 2024",
        },
      ],
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

export const Code7 = () => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Date Validation Form"
      defaultTab="code"
    />
  );
};

export default Code7;
