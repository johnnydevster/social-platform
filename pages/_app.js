import { NotificationsProvider } from "@mantine/notifications";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <NotificationsProvider position="bottom-center">
      <Component {...pageProps} />
    </NotificationsProvider>
  );
}

export default MyApp;
