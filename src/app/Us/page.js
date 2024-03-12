import Image from "next/image";
import Logo from "./Nosotros.png"
export default function Us() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Nosotros</h1>
        <Image width={35} height={35} src={Logo} alt="SYX"/>
      </main>
    );
  }