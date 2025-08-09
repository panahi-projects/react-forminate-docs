import { CodeProps } from "@site/types";
import { CodePreview } from "../CodePlayground";
import {
  DynamicForm,
  FormRegistryProvider,
  useFormActions,
  useFormValues,
  type FormDataCollectionType,
} from "react-forminate";

const SampleForm = () => {
  const values = useFormValues("validationForm_manual_validate");
  const { validateForm } = useFormActions("validationForm_manual_validate");

  const formSchema: FormDataCollectionType = {
    formId: "validationForm_manual_validate",
    title: "Form Manual Validation",
    options: {
      submit: {
        visibility: false,
      },
    },
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
  const handleSubmit = async () => {
    const isFormValid = await validateForm(formSchema);
    if (isFormValid) {
      console.log("Form Is Valid");
      console.log("Form values:", values);
    } else {
      console.log("Form Is Not Valid");
    }
  };
  return (
    <div>
      <DynamicForm formData={formSchema} />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#008556",
          color: "#fff",
          padding: "6px 12px",
          margin: "4px auto",
          border: "none",
          outline: "none",
        }}
      >
        Submit Form
      </button>
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
  useFormActions,
  useFormValues,
  type FormDataCollectionType,
} from "react-forminate";

const SampleForm = () => {
  <!-- truncate-start -->
  const values = useFormValues("validationForm_manual_validate");
  const { validateForm } = useFormActions("validationForm_manual_validate");
  <!-- truncate-end -->
  const formSchema: FormDataCollectionType = {
    formId: "validationForm_manual_validate",
    title: "Form Manual Validation",
    options: {
      submit: {
        visibility: false,
      },
    },
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
  const handleSubmit = async () => {
    const isFormValid = await validateForm(formSchema);
    if (isFormValid) {
      console.log("Form Is Valid");
      console.log("Form values:", values);
    } else {
      console.log("Form Is Not Valid");
    }
  };
  return (
    <div>
      <DynamicForm formData={formSchema} />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#008556",
          color: "#fff",
          padding: "6px 12px",
          margin: "4px auto",
          border: "none",
          outline: "none",
        }}
      >
        Submit Form
      </button>
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

export const Code13 = ({
  description = "",
  features = [],
  keywords = [],
}: CodeProps) => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Manually Trigger Form Validation"
      defaultTab="code"
      description={description}
      features={features}
      keywords={keywords}
    />
  );
};

export default Code13;
