import { Richmd } from "@richmd/react";
import fs from "fs";
import path from "path";

export default function Home() {
  const contentPath = path.join("./app/contents", "content.md");
  const content = fs.readFileSync(contentPath, "utf8");

  return (
    <article>
      <Richmd text={content} />
    </article>
  );
}
