"use client";

import Footer from "./components/Footer";
import { useSession } from "next-auth/react";
import Component2 from "./components/Home/Component-2";
import Component1 from "./components/Home/Component-1";
export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <Component1/>
      <Component2/>
      <Footer />
    </main>
  );
}
