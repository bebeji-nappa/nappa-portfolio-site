import { Richmd } from "@richmd/react";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Home() {
  const bioPath = path.join("./app/contents", "bio.md");
  const bio = fs.readFileSync(bioPath, "utf8");

  return (
    <article>
      <Richmd text={bio} />
    </article>
  );
}
