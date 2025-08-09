import { CodeProps } from "@site/types";
import { CodePreview } from "../CodePlayground";
import {
  DynamicForm,
  FormRegistryProvider,
  useFormErrors,
  type FormDataCollectionType,
} from "react-forminate";

const SampleForm = () => {
  const errors = useFormErrors("validationForm_errors");

  const formSchema: FormDataCollectionType = {
    formId: "validationForm_errors",
    title: "Validation Form Errors",
    fields: [
      {
        fieldId: "firstName",
        type: "text",
        label: "First Name",
        required: true,
      },
      {
        fieldId: "lastName",
        type: "text",
        label: "Last Name",
        required: true,
      },
      {
        fieldId: "email",
        type: "text",
        label: "Email",
        required: true,
        validation: [
          {
            type: "email",
            message: "The email format is not correct",
          },
        ],
      },
    ],
  };
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return (
    <div>
      {errors &&
        Object.entries(errors).map(([fieldId, message]) => (
          <div key={fieldId}>
            <span>{fieldId}: </span>
            <span>{message}</span>
          </div>
        ))}
      <DynamicForm formData={formSchema} onSubmit={handleSubmit} />
    </div>
  );
};

const App = () => {
  return (
    <FormRegistryProvider>
      <SampleForm />
    </FormRegistryProvider>
  );
};

const Code = `import {
  DynamicForm,
  FormRegistryProvider,
  useFormErrors,
  type FormDataCollectionType,
} from "react-forminate";

const SampleForm = () => {
  <!-- truncate-start -->
  const errors = useFormErrors("validationForm_errors");
  <!-- truncate-end -->
  const formSchema: FormDataCollectionType = {
    formId: "validationForm_errors",
    title: "Validation Form Errors",
    fields: [
      {
        fieldId: "firstName",
        type: "text",
        label: "First Name",
        required: true,
      },
      {
        fieldId: "lastName",
        type: "text",
        label: "Last Name",
        required: true,
      },
      {
        fieldId: "email",
        type: "text",
        label: "Email",
        required: true,
        validation: [
          {
            type: "email",
            message: "The email format is not correct",
          },
        ],
      },
    ],
  };
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return (
    <div>
      {errors &&
        Object.entries(errors).map(([fieldId, message]) => (
          <div key={fieldId}>
            <span>{fieldId}: </span>
            <span>{message}</span>
          </div>
        ))}
      <DynamicForm formData={formSchema} onSubmit={handleSubmit} />
    </div>
  );
};

const App = () => {
  return (
    <FormRegistryProvider>
      <SampleForm />
    </FormRegistryProvider>
  );
};
`;

export const Code12 = ({
  description = "",
  features = [],
  keywords = [],
}: CodeProps) => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Validation Form Errors"
      defaultTab="code"
      description={description}
      features={features}
      keywords={keywords}
    />
  );
};

export default Code12;
