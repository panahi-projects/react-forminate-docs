import {
  DynamicForm,
  validationEngine,
  ValidationResponseType,
  type FormDataCollectionType,
} from "react-forminate";
import { CodePreview } from "../CodePlayground";

//Define a validation custom strategy
class IbanValidationStrategy {
  validate(value: string): ValidationResponseType {
    // Simple IBAN regex validation (basic format check)
    const ibanRegex = /^[A-Z]{2}\d{16}[A-Z0-9]{1,30}$/;

    const isFormatValid = ibanRegex.test(value);

    return {
      isValid: isFormatValid,
      message: isFormatValid ? "" : "Invalid IBAN format",
    };
  }
}
const SampleFormWithCustomStrategy = () => {
  const formSchema: FormDataCollectionType = {
    formId: "validationForm_custom_strategies",
    title: "Validation Form Custom Strategies",
    fields: [
      {
        fieldId: "iban",
        type: "text",
        label: "IBAN",
        required: true,
        placeholder: "Enter your International Bank Account Number",
        description:
          "A sample valid value to be tested for IBAN field: IR12345678900000001",
        validation: [
          {
            type: "IBAN", //uses of the custom validation strategies
          },
        ],
      },
    ],
  };
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formSchema} onSubmit={handleSubmit} />;
};

const App = () => {
  validationEngine.registerStrategy("IBAN", new IbanValidationStrategy());

  return <SampleFormWithCustomStrategy />;
};

const Code = `import {
  DynamicForm,
  validationEngine,
  ValidationResponseType,
  type FormDataCollectionType,
} from "react-forminate";
import { CodePreview } from "../CodePlayground";

//Define a validation custom strategy
class IbanValidationStrategy {
  validate(value: string): ValidationResponseType {
    // Simple IBAN regex validation (basic format check)
    const ibanRegex = /^[A-Z]{2}\d{16}[A-Z0-9]{1,30}$/;

    const isFormatValid = ibanRegex.test(value);

    return {
      isValid: isFormatValid,
      message: isFormatValid ? "" : "Invalid IBAN format",
    };
  }
}
const SampleFormWithCustomStrategy = () => {
  const formSchema: FormDataCollectionType = {
    formId: "validationForm_custom_strategies",
    title: "Validation Form Custom Strategies",
    fields: [
      {
        fieldId: "iban",
        type: "text",
        label: "IBAN",
        required: true,
        placeholder: "Enter your International Bank Account Number",
        description:
          "A sample valid value to be tested for IBAN field: IR12345678900000001",
        validation: [
          {
            type: "IBAN", //uses of the custom validation strategies
          },
        ],
      },
    ],
  };
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formSchema} onSubmit={handleSubmit} />;
};

const App = () => {
  validationEngine.registerStrategy("IBAN", new IbanValidationStrategy());

  return <SampleFormWithCustomStrategy />;
};
`;

export const Code11 = () => {
  return (
    <CodePreview
      code={Code}
      component={<App />}
      title="Validation Form Custom Strategies"
      defaultTab="code"
    />
  );
};

export default Code11;
