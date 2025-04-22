import { DynamicForm, FormDataCollection } from "react-forminate";

const BasicStructure = () => {
  const formData: FormDataCollection = {
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
            pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
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
};

export default BasicStructure;
