import React, { Suspense, useContext, useEffect } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Head from "next/head";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import Loading from "../common/Loading";

export default function Layout({ children, title }) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const router = useRouter();

  useEffect(() => {
    closeSidebar();
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`flex h-screen bg-gray-50 dark:bg-gray-900   ${
          isSidebarOpen && "overflow-hidden"
        }`}
      >
        <Sidebar />
        <div
          className="flex flex-col flex-1 w-full
      "
        >
          <Header />
          <main className="h-full overflow-y-auto">
            <Suspense fallback={<Loading />}>
              <div className="container grid px-6 mx-auto">{children}</div>
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
