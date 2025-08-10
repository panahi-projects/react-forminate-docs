import { CodeProps } from "@site/types";
import { CodePreview } from "../CodePlayground";
import { DynamicForm, type FormDataCollectionType } from "react-forminate";

const UserRegisterForm = () => {
  const UserRegistrationForm: FormDataCollectionType = {
    formId: "userRegistration",
    options: {
      validateFieldsOnBlur: true,
    },
    fields: [
      {
        fieldId: "email",
        type: "email",
        label: "Email",
        required: true,
        validation: [
          {
            pattern: "^\\S+@\\S+\\.\\S+$",
            message: "Enter a valid email address",
          },
        ],
      },
      {
        fieldId: "password",
        type: "password",
        label: "Password",
        required: true,
        validation: [
          {
            type: "password",
          },
        ],
      },
      {
        fieldId: "age",
        type: "number",
        label: "Age",
        required: true,
        validation: [
          {
            min: 18,
            message: "You must be 18 or older",
          },
          {
            max: 120,
            message: "Enter a realistic age",
          },
        ],
      },
      {
        fieldId: "subscribe",
        type: "checkbox",
        required: true,
        itemsClassName: "text-gray-100",
        options: [
          {
            value: "yes",
            label: "Subscribe the newsletter",
          },
        ],
      },
    ],
  };
  return (
    <DynamicForm
      formId={UserRegistrationForm.formId}
      formData={UserRegistrationForm}
      onSubmit={(values, isValid) => {
        console.log("Submitting:", values, isValid);
      }}
    />
  );
};

const App = () => {
  return <UserRegisterForm />;
};

const Code = `import { DynamicForm, type FormDataCollectionType } from "react-forminate";

const UserRegisterForm = () => {
  const UserRegistrationForm: FormDataCollectionType = {
    formId: "userRegistration",
    options: {
      validateFieldsOnBlur: true,
    },
    <!-- truncate-start -->
    fields: [
      {
        fieldId: "email",
        type: "email",
        label: "Email",
        required: true,
        validation: [
          {
            pattern: "^\\S+@\\S+\\.\\S+$",
            message: "Enter a valid email address",
          },
        ],
      },
      {
        fieldId: "password",
        type: "password",
        label: "Password",
        required: true,
        validation: [
          {
            type: "password",
          },
        ],
      },
      {
        fieldId: "age",
        type: "number",
        label: "Age",
        required: true,
        validation: [
          {
            min: 18,
            message: "You must be 18 or older",
          },
          {
            max: 120,
            message: "Enter a realistic age",
          },
        ],
      },
      {
        fieldId: "subscribe",
        type: "checkbox",
        required: true,
        itemsClassName: "text-gray-100",
        options: [
          {
            value: "yes",
            label: "Subscribe the newsletter",
          },
        ],
      },
    ],
    <!-- truncate-end -->
  };
  return (
    <DynamicForm
      formId={UserRegistrationForm.formId}
      formData={UserRegistrationForm}
      onSubmit={(values, isValid) => {
        console.log("Submitting:", values, isValid);
      }}
    />
  );
};

const App = () => {
  return <UserRegisterForm />;
};
`;

export const Code14 = ({
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

export default Code14;
