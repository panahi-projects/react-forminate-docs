import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";
import { CodeProps } from "@site/types";

const formSchema: FormDataCollectionType = {
  formId: "validationForm_min_max_numeric",
  title: "Validation Form Min/Max Numeric",
  fields: [
    {
      fieldId: "age",
      type: "number",
      label: "Age",
      required: true,
      validation: [
        {
          min: 18,
          max: 100,
          message: "Must be between 18 to 100",
        },
      ],
      placeholder: "How old are you?",
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
  formId: "validationForm_min_max_numeric",
  title: "Validation Form Min/Max Numeric",
  fields: [
    // <!-- truncate-start -->
    {
      fieldId: "age",
      type: "number",
      label: "Age",
      required: true,
      validation: [
        {
          min: 18,
          max: 100,
          message: "Must be between 18 to 100",
        },
      ],
      placeholder: "How old are you?",
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

export const Code6 = ({
  description = "",
  features = [],
  keywords = [],
}: CodeProps) => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Numeric Validation Form"
      defaultTab="code"
      description={description}
      features={features}
      keywords={keywords}
    />
  );
};

export default Code6;
