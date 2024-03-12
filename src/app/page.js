import Image from "next/image";
import Logo from "./home.png"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image width={35} height={35} src={Logo} alt="SYX"/>
      <h1>Home</h1>
    </main>
  );
}
