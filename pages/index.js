import { useState } from "react";
import { Link } from "next";
import Layout from "../components/layout/Layout";
import Sidebar from "../components/layout/sidebar/Sidebar";

export default function Home({ upcomingGames }) {
  return (
    <Layout>
      <Sidebar />
      <div className="p-5 bg-primary-50 rounded-lg col-span-3 lg:col-span-2">
        Content
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const upcomingGames = fetch("http://localhost:3000/api/auth")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  return {
    props: {}, // will be passed to the page component as props
  };
}
