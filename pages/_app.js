import "@/styles/globals.css";
import { StormProvider } from "@/context/StormlogContext";

export default function App({ Component, pageProps }) {
  return (
    <StormProvider>
      <Component {...pageProps} />
    </StormProvider>
  );
}
