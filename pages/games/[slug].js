import React from "react";

export default function Game({ gameData }) {
  return (
    <div>
      <h1>{gameData?.name}</h1>
      <p>{gameData?.summary}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_ENDPOINT}/upcominggames`);
  const data = await response.json();
  const paths = data.map((game) => {
    return { params: { slug: game.slug } };
  });
  return {
    paths, // needs to be an array of objects with params
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/game?slug=${params.slug}`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      gameData: data,
    }, // will be passed to the page component as props
  };
}
