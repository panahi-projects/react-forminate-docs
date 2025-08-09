import React from "react";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import { CodePreview } from "../CodePlayground";
import { CodeProps } from "@site/types";

const formSchema: FormDataCollectionType = {
  formId: "validationForm_condition",
  title: "Validation Form Conditional",
  fields: [
    {
      fieldId: "maritalStatus",
      type: "radio",
      label: "Are you married?",
      options: [
        {
          value: "yes",
          label: "Yes",
        },
        {
          value: "no",
          label: "No",
        },
      ],
    },
    {
      fieldId: "spouseName",
      type: "text",
      label: "Spouse Name",
      visibility: {
        dependsOn: "maritalStatus",
        condition: "equals",
        value: "yes",
      },
      required: true,
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
  formId: "validationForm_condition",
  title: "Validation Form Conditional",
  fields: [
    {
      fieldId: "maritalStatus",
      type: "radio",
      label: "Are you married?",
      options: [
        {
          value: "yes",
          label: "Yes",
        },
        {
          value: "no",
          label: "No",
        },
      ],
    },
    // <!-- truncate-start -->
    {
      fieldId: "spouseName",
      type: "text",
      label: "Spouse Name",
      visibility: {
        dependsOn: "maritalStatus", //Id of the dependant field
        condition: "equals",
        value: "yes",
      },
      required: true,
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

export const Code10 = ({
  description = "",
  features = [],
  keywords = [],
}: CodeProps) => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Conditional Validation Form"
      defaultTab="code"
      description={description}
      features={features}
      keywords={keywords}
    />
  );
};

export default Code10;
