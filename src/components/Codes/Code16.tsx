import { CodeProps } from "@site/types";
import { CodePreview } from "../CodePlayground";
import ReactHookForm, { ReactHookFormCode } from "./Comparison/ReactHookForm";

export const Code16 = ({
  description = "",
  features = [],
  keywords = [],
}: CodeProps) => {
  return (
    <CodePreview
      code={ReactHookFormCode}
      component={<ReactHookForm />}
      title="React-Hook-Form Signup Form"
      defaultTab="code"
      description={description}
      features={features}
      keywords={keywords}
    />
  );
};

export default Code16;
