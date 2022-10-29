import Head from "next/head";
import { Layout } from "../components";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - SantriKoding.com</title>
      </Head>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border-0">
              <div className="container-fluid py-5">
                <h2 className="display-6 fw-bold">LARAVEL JWT + NEXT.JS</h2>
                <p className="col-md-12 fs-4">
                  Belajar Authentication Laravel JWT dengan Next.js di
                  SantriKoding.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
