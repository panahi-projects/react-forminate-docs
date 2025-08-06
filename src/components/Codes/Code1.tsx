import { CodePreview } from "../CodePlayground";
import { DynamicForm } from "react-forminate";

export const FirstFormPreview = () => {
  return (
    <DynamicForm
      formData={{
        formId: "firstForm",
        fields: [
          {
            fieldId: "demo",
            type: "text",
            label: "Text field",
            placeholder: "Try typing here",
            description: "This live demo reacts like a real form",
            required: true,
          },
        ],
      }}
      onSubmit={(values, isValid) =>
        console.log("Form values:", values, isValid)
      }
    />
  );
};

export const Code = `import { DynamicForm } from "react-forminate";

export const FirstFormPreview = () => {
  return (
    <DynamicForm
      formData={{
        formId: "firstForm",
        fields: [
          {
            fieldId: "demo",
            type: "text",
            label: "Text field",
            placeholder: "Try typing here",
            description: "This live demo reacts like a real form",
          },
        ],
      }}
      onSubmit={(values, isValid) => console.log("Form values:", values, isValid)}
    />
  );
};`;

export const Code1 = () => {
  return (
    <CodePreview
      code={Code}
      component={<FirstFormPreview />}
      title="First form preview"
      defaultTab="code"
    />
  );
};

export default Code1;
