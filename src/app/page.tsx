import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Biography from "@/components/Biography";
import Skills from "@/components/Skills";
import Sidebar from "@/components/Sidebar";
import Education from "@/components/Education";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="w-full relative flex">
      <Sidebar />
      <div className="w-full md:ml-72 flex-1">
        <div id="home" className="relative h-[500vh] w-full">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <ScrollyCanvas />
            <Overlay />
          </div>
        </div>
        <Biography />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Chatbot />
      </div>
    </main>
  );
}
