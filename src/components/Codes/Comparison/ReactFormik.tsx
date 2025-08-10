import { useFormik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      comparePassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required."),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required."),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain at least one uppercase, one lowercase, one number and one special character"
        ),
      comparePassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2.5">
        <div className="space-y-2">
          <RequiredLabel htmlFor="firstName">First Name</RequiredLabel>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-sm text-red-600">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="lastName">Last Name</RequiredLabel>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-sm text-red-600">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="password">Password</RequiredLabel>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm text-red-600">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="space-y-2 mb-4.5">
          <RequiredLabel htmlFor="comparePassword">
            Confirm Password
          </RequiredLabel>
          <input
            id="comparePassword"
            name="comparePassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comparePassword}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.comparePassword && formik.errors.comparePassword ? (
            <div className="text-sm text-red-600">
              {formik.errors.comparePassword}
            </div>
          ) : null}
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

const ReactFormik = () => {
  return <SignupForm />;
};

export default ReactFormik;

export const ReactFormikCode = `import { useFormik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      comparePassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required."),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required."),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain at least one uppercase, one lowercase, one number and one special character"
        ),
      comparePassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2.5">
        <div className="space-y-2">
          <RequiredLabel htmlFor="firstName">First Name</RequiredLabel>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-sm text-red-600">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="lastName">Last Name</RequiredLabel>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-sm text-red-600">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="space-y-2">
          <RequiredLabel htmlFor="password">Password</RequiredLabel>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm text-red-600">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="space-y-2 mb-4.5">
          <RequiredLabel htmlFor="comparePassword">
            Confirm Password
          </RequiredLabel>
          <input
            id="comparePassword"
            name="comparePassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comparePassword}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.comparePassword && formik.errors.comparePassword ? (
            <div className="text-sm text-red-600">
              {formik.errors.comparePassword}
            </div>
          ) : null}
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

const ReactFormik = () => {
  return <SignupForm />;
};

export default ReactFormik;
`;
