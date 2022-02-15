import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React from "react";
import { notificationStore } from "../../store/notification.store";

export type NotificationType = "success" | "error";

interface Props {
  type: NotificationType;
  message?: string;
  header?: string;
  duration?: number;
}

export const Notification: React.FC<Props> = ({
  type,
  message,
  header,
  duration,
}) => {
  const headerText =
    header || (type === "success" ? "Congratulations" : "Oops!");
  const messageText =
    message ||
    (type === "success" ? "Action was successful" : "Something wetn wrong...");
  return (
    <Snackbar
      open={true}
      autoHideDuration={duration || 7000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert 
        severity={type}
        sx={{
          minWidth: 300
        }}
        onClose={notificationStore.clearNotification}
      >
        <AlertTitle>{headerText}</AlertTitle>
        {messageText}
      </Alert>
    </Snackbar>
  );
};
