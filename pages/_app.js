import Navbar from "../components/Navbar";
import "../styles/globals.css";
import CompletionContextProvider from "../util/frontend/CompletionContext";

function MyApp({ Component, pageProps }) {
  return (
    <CompletionContextProvider>
      <div className="font-sans">
        <Navbar />
        <div className="pt-16 min-h-screen flex flex-col overflow-hidden">
          <Component {...pageProps} />
        </div>
      </div>
    </CompletionContextProvider>
  );
}

export default MyApp;
