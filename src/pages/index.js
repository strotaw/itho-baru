import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/books/");
  }, [router]);

  return <div style={{textAlign: "center", marginTop: "2rem"}}>Loading...</div>;
}
