import { useEffect, useState } from 'react';
import { notificationStore } from '../../store/notification.store';

interface AuthOptions {
  domain: string;
  audience: string;
  clientId: string;
  redirectUri: string;
}

export const useAuthToken = ({
  domain,
  audience,
  clientId,
  redirectUri,
}: AuthOptions): string => {
  const [authToken, setAuthToken] = useState('');

  return authToken;
};
