import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_BACKEND}`;
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
