import { Richmd } from "@richmd/react";
import fs from "fs";
import path from "path";

export default function Home() {
  const resumePath = path.join("./app/contents", "resume.md");
  const resume = fs.readFileSync(resumePath, "utf8");

  return (
    <article>
      <Richmd text={resume} />
    </article>
  );
}
