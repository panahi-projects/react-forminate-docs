import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ReactNode } from "react";

// Define Zod schema
const signupSchema = z
  .object({
    firstName: z
      .string()
      .max(15, "Must be 15 characters or less")
      .nonempty("This field is required."),
    lastName: z
      .string()
      .max(20, "Must be 20 characters or less")
      .nonempty("This field is required."),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("This field is required."),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character"
      ),
    comparePassword: z.string().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.comparePassword, {
    message: "Passwords must match",
    path: ["comparePassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignupFormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  // Helper component for required field labels
  const RequiredLabel = ({
    htmlFor,
    children,
  }: {
    htmlFor: string;
    children: ReactNode;
  }) => (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-100"
    >
      {children} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <div className="space-y-2">
          <RequiredLabel htmlFor="firstName">First Name</RequiredLabel>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName && (
            <div className="text-sm text-red-600">
              {errors.firstName.message}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="lastName">Last Name</RequiredLabel>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName && (
            <div className="text-sm text-red-600">
              {errors.lastName.message}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <div className="text-sm text-red-600">{errors.email.message}</div>
          )}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="password">Password</RequiredLabel>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <div className="text-sm text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="space-y-2 mb-4.5">
          <RequiredLabel htmlFor="comparePassword">
            Confirm Password
          </RequiredLabel>
          <input
            id="comparePassword"
            type="password"
            {...register("comparePassword")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.comparePassword && (
            <div className="text-sm text-red-600">
              {errors.comparePassword.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-[#0457aa] cursor-pointer text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const ReactHookForm = () => {
  return <SignupForm />;
};

export default ReactHookForm;

export const ReactHookFormCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ReactNode } from "react";

// Define Zod schema
const signupSchema = z
  .object({
    firstName: z
      .string()
      .max(15, "Must be 15 characters or less")
      .nonempty("This field is required."),
    lastName: z
      .string()
      .max(20, "Must be 20 characters or less")
      .nonempty("This field is required."),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("This field is required."),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character"
      ),
    comparePassword: z.string().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.comparePassword, {
    message: "Passwords must match",
    path: ["comparePassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignupFormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  // Helper component for required field labels
  const RequiredLabel = ({
    htmlFor,
    children,
  }: {
    htmlFor: string;
    children: ReactNode;
  }) => (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {children} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <div className="space-y-2">
          <RequiredLabel htmlFor="firstName">First Name</RequiredLabel>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName && (
            <div className="text-sm text-red-600">
              {errors.firstName.message}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="lastName">Last Name</RequiredLabel>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName && (
            <div className="text-sm text-red-600">
              {errors.lastName.message}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <div className="text-sm text-red-600">{errors.email.message}</div>
          )}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="password">Password</RequiredLabel>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <div className="text-sm text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="space-y-2 mb-4.5">
          <RequiredLabel htmlFor="comparePassword">
            Confirm Password
          </RequiredLabel>
          <input
            id="comparePassword"
            type="password"
            {...register("comparePassword")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.comparePassword && (
            <div className="text-sm text-red-600">
              {errors.comparePassword.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-[#0457aa] cursor-pointer text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const ReactHookForm = () => {
  return <SignupForm />;
};

export default ReactHookForm;
`;
