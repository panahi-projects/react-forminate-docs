import { LiveCodeBlock } from "../LiveCodeBlock";
import { DynamicForm } from "react-forminate";

const BasicStructure = () => {
  return (
    <LiveCodeBlock
      showConsole
      code={`
        // import { DynamicForm } from "react-forminate";

        () => {
          const formData: FormDataCollectionType = {
            formId: "userProfile",
            title: "User Profile",
            fields: [
              {
                fieldId: "name",
                label: "Name",
                type: "text",
                required: true,
                placeholder: "Enter your name",
              },
              {
                fieldId: "email",
                label: "Email",
                type: "text",
                required: true,
                validation: [
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format !",
                  },
                ],
              },
              {
                fieldId: "age",
                label: "Age",
                type: "number",
              },
            ],
          };
        
          const handleSubmit = (values: {}, isValid: boolean) => {
            console.log("Is form valid: ", isValid);
            console.log("Form values: ", values);
          };
          return (
            <div>
              <DynamicForm formData={formData} onSubmit={handleSubmit} />
            </div>
          );
      }`.trim()}
      scope={{ DynamicForm }}
    />
  );
};

export default BasicStructure;
