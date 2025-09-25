import { Richmd } from "@richmd/react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import "@richmd/react/dist/richmd.css";
import "./style.css";

export default function Home() {
  const bioPath = path.join("./app/contents", "content.md");
  const bio = fs.readFileSync(bioPath, "utf8");

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
        <Richmd text={bio} />
      </article>
    </div>
  );
}
