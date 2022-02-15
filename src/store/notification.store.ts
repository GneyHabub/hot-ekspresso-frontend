import { makeAutoObservable } from "mobx";
import { NotificationType } from "../components/Notification/Notification";

interface Notification {
  type: NotificationType;
  header?: string;
  message?: string;
  duration?: number;
}

class NotificationsStore {
  notification: Notification | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
    this.setNotification = this.setNotification.bind(this);
    this.clearNotification = this.clearNotification.bind(this);
  }

  setNotification(notification: Notification) {
    this.notification = notification;
  }
  clearNotification() {
    this.notification = undefined;
  }
  setNotificationFromError(e: any) {
    this.setNotification({
      type: "error",
      header: e.name,
      message: e.message,
    });
  }
}

export const notificationStore = new NotificationsStore();
