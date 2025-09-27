import { Richmd } from "@richmd/react";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Home() {
  const resumePath = path.join("./app/contents", "resume.md");
  const resume = fs.readFileSync(resumePath, "utf8");

  return (
    <div className="container max-w-4xl mx-auto mt-5 px-5 flex flex-col gap-8">
      <div style={{ display: 'block', position: 'relative', width: '300px', height: '75px' }}>
        <Image
          src='/logo.svg'
          alt='title_logo'
          sizes='100vw'
          fill
          style={{
            width: '100%'
          }}
        />
      </div>

      <article>
        <Richmd text={resume} />
      </article>
    </div>
  );
}
