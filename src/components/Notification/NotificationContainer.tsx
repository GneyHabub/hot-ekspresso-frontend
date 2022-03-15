import React from 'react';
import { observer } from 'mobx-react';
import { Notification } from './Notification';
import { notificationStore } from '../../store/notification.store';

export const NotificationContainer = observer(() => {
  const { notification } = notificationStore;
  if (!notification) {
    return null;
  }
  return (
    <Notification
      type={notification.type}
      header={notification.header}
      message={notification.message}
      duration={notification.duration}
    />
  );
});
