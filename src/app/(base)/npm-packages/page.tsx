import {Column, NPMPackage} from "@/src/components";
import {PACKAGES} from "../../_npm-packages/helper";

export default function NPM() {
  return (
    <Column>
      {PACKAGES.map((npmPackage, key) => (
        <NPMPackage package={npmPackage} key={key} />
      ))}
    </Column>
  );
}
