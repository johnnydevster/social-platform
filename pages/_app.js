import { NotificationsProvider } from "@mantine/notifications";
import { AuthUserProvider } from "../lib/hooks/authContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <NotificationsProvider position="bottom-center">
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </NotificationsProvider>
  );
}

export default MyApp;
