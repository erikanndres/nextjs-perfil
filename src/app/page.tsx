import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <header>
        <h1 className="text-9xl font-bold">HOME PAGE</h1>
      </header>
      <div className="container text-center">
        <Link href={"/perfil"} className="font-normal text-2xl">
          Ir a la página de mi perfil
        </Link>
      </div>
    </main>
  );
}
