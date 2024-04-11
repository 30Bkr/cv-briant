import Cursos from "@/components/main/cursos/Cursos";
import CursosCard from "@/components/main/cursos/CursosCard";
import Myself from "@/components/main/myself/Myself";
import Presentacion from "@/components/main/presentacion/Presentacion";


export default function Home() {
  return (
    <>
      <Presentacion />
      <Cursos />
      <Myself />
    </>

  );
}
