import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";
import { CodeProps } from "@site/types";

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
};
`;

export const Code3 = ({
  description = "",
  features = [],
  keywords = [],
}: CodeProps) => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Required Fields Form"
      defaultTab="code"
      description={description}
      features={features}
      keywords={keywords}
    />
  );
};

export default Code3;
