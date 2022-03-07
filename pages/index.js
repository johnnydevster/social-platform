import { useState } from "react";
import { Link } from "next";
import Layout from "../components/layout/Layout";
import Sidebar from "../components/layout/sidebar/Sidebar";

export default function Home() {
  return (
    <Layout>
      <Sidebar />
      <div className="p-5 bg-primary-50 rounded-lg col-span-3 lg:col-span-2">
        Content
      </div>
    </Layout>
  );
}
