import ParticlesComponent from "@/components/Particles";
import Quiz2 from "@/components/Quiz";
import Image from "next/image";

export default function Home() {
  return (
    <main className="App">
      
      <ParticlesComponent id="particles"/>
      <div>
        <Quiz2 />
      </div>
    </main>
  );
}
