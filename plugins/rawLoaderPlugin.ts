import { LoadContext, Plugin } from "@docusaurus/types";
import path from "path";

export default function rawLoaderPlugin(context: LoadContext): Plugin {
  return {
    name: "custom-raw-loader",
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.code\.(ts|tsx|js|jsx|txt)$/,
              use: "raw-loader",
              include: path.resolve(__dirname, "../"), // adjust if needed
            },
          ],
        },
      };
    },
  };
}
