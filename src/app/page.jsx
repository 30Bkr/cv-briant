import Footer from "@/components/footer/Footer";
import Cursos from "@/components/main/cursos/Cursos";
import CursosCard from "@/components/main/cursos/CursosCard";
import Myself from "@/components/main/myself/Myself";
import Presentacion from "@/components/main/presentacion/Presentacion";
import Proyects from "@/components/main/proyects/Proyects";

export default function Home() {
  return (
    <>
        <Presentacion />
        <Cursos />
        <Proyects />
        <Myself />
        <Footer />
    </>
  );
}
