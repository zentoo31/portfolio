import TopBar from "@/components/os/topBar";
import Sidebar from "@/components/os/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-def text-text-def">
      <TopBar />
      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar />
        <section className="flex-1 p-8">
          <h1 className="font-sans text-text-def">Hola</h1>
        </section>
      </div>
    </main>
  );
}
