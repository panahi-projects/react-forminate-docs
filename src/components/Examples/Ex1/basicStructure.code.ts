export const noInlineExample = `
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
            pattern: "^\\S+@\\S+\\.\\S+$",
            message: "Invalid email format",
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
render(<Example1 />)
`.trim();

export default noInlineExample;
