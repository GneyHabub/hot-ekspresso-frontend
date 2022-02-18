import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { notificationStore } from "../../store/notification.store";

interface AuthOptions {
  domain: string;
  audience: string;
  clientId: string;
  redirect_uri: string;
}

export const useAuthToken = ({
  domain,
  audience,
  clientId,
  redirect_uri,
}: AuthOptions): string => {
  const { isAuthenticated, getAccessTokenSilently, getAccessTokenWithPopup } =
    useAuth0();
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const getToken = async (): Promise<void> => {
      try {
        const token = await getAccessTokenSilently({
          domain,
          audience,
          clientId,
          redirect_uri,
        });
        setAuthToken(token);
      } catch (e) {
        notificationStore.setNotificationFromError(e);
        if ((e as { message: string }).message === "Consent required") {
          setAuthToken(
            await getAccessTokenWithPopup({ audience, domain, clientId })
          );
        }
      }
    };

    getToken();
  }, [isAuthenticated]);

  return authToken;
};
