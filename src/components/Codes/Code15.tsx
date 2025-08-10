import { CodeProps } from "@site/types";
import { CodePreview } from "../CodePlayground";
import ReactForminateForm, {
  ReactForminateFormCode,
} from "./Comparison/ReactForminateForm";

export const Code15 = ({
  description = "",
  features = [],
  keywords = [],
}: CodeProps) => {
  return (
    <CodePreview
      code={ReactForminateFormCode}
      component={<ReactForminateForm />}
      title="React Forminate Signup Form"
      defaultTab="code"
      description={description}
      features={features}
      keywords={keywords}
    />
  );
};

export default Code15;
