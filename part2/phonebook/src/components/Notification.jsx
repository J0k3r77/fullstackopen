const Notification = ({ notificationType, message }) => {
  const styles = {
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  styles.color = notificationType === "success" ? "green" : "red";
  if (message === null) return null;
  return <div style={styles}>{message}</div>;
};

export default Notification;
