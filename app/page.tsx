import { Richmd } from "@richmd/react";
import Image from "next/image";
import fs from 'fs'
import path from 'path'
import "@richmd/react/dist/richmd.css";
import './style.css';

export default function Home() {
  const bioPath = path.join('./app/contents', 'content.md')
  const bio = fs.readFileSync(bioPath, 'utf8')

  return (
    <div className="container w-4xl mx-auto mt-5">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={600}
        height={150}
      />

      <article>
        <Richmd text={bio} />
      </article>
    </div>
  );
}
