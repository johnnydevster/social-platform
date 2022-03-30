import Layout from "../components/layout/Layout";
import Sidebar from "../components/layout/sidebar/Sidebar";

function Error({ statusCode }) {
  return (
    <Layout>
      <Sidebar />
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
