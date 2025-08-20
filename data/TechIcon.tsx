// components/TechIcon.tsx
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiThreedotjs,
    SiStreamlit,
    SiC,
    SiFirebase,
    SiSupabase,
    SiFramer,
    SiClerk,
    SiZod,
    
  } from "react-icons/si";
  
  import { FaFilePdf } from "react-icons/fa"; // pdf.js ke liye
  import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

  
  type Props = {
    name: string;
    size?: number;
  };
  
  const TechIcon = ({ name, size = 20 }: Props) => {
    const icons: Record<string, JSX.Element> = {
      react: <SiReact size={size} color="#61DBFB" />,
      nextjs: <SiNextdotjs size={size} color="white" />,
      typescript: <SiTypescript size={size} color="#3178c6" />,
      tailwind: <SiTailwindcss size={size} color="#38bdf8" />,
      threejs: <SiThreedotjs size={size} color="white" />,
      framer: <SiFramer size={size} color="#cbacf9" />,
      stream: <SiStreamlit size={size} color="red" />,
      c: <SiC size={size} color="#283593" />,
      firebase: <SiFirebase size={size} color="#FFCA28" />,
      supabase: <SiSupabase size={size} color="#3ECF8E" />,
      clerk: <SiClerk size={size} color="white" />,
      pdfjs: <FaFilePdf size={size} color="#d32f2f" />,
      zod: <SiZod size={size} color="#1c1c1c" />,
      html: <SiHtml5 size={size} color="#e34c26" />,
      css: <SiCss3 size={size} color="#264de4" />,
      javascript: <SiJavascript size={size} color="#f0db4f" />,
    };
  
    return icons[name] || null;
  };
  
  export default TechIcon;
  