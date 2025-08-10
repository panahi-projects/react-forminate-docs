import { CodeProps } from "@site/types";
import { CodePreview } from "../CodePlayground";
import ReactFormik, { ReactFormikCode } from "./Comparison/ReactFormik";

export const Code17 = ({
  description = "",
  features = [],
  keywords = [],
}: CodeProps) => {
  return (
    <CodePreview
      code={ReactFormikCode}
      component={<ReactFormik />}
      title="React-Formik Signup Form"
      defaultTab="code"
      description={description}
      features={features}
      keywords={keywords}
    />
  );
};

export default Code17;
