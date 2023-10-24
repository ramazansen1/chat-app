const Message = ({ msg, user }) => {
  if (user === msg.user) {
    return <p className="msg-user">{msg.text}</p>;
  }
  return (
    <>
      <p className="msg-other">
        <span className="msg-other-user">{msg.user} </span>
        <span>{msg.text}</span>
      </p>
    </>
  );
};

export default Message;
