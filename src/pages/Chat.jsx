import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import Message from "../components/Message";

const Chat = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);

  // koleksiyon referans alma
  const messagesCol = collection(db, "messages");

  const handleSubmit = (e) => {
    e.preventDefault();

    // input boşsa mesaj gönderme
    if (!e.target[0].value) return;

    // belirttiğimiz koleksiyona yeni eleman ekler
    addDoc(messagesCol, {
      text: e.target[0].value,
      user: auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    });

    // mesajı sıfırlama
    e.target[0].value = "";
  };

  // gönderilen mesajları alma
  useEffect(() => {
    // filtreleme ayarlarını yapma
    const queryOptions = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );
    // koleksiyonun değişimini izler
    // değişimi algıladığında fonksiyonu çalıştırır.
    onSnapshot(queryOptions, (snapshot) => {
      let comingMessages = [];

      // koleksiyonu dönüp document verilerine erişme
      snapshot.forEach((doc) => {
        comingMessages.push(doc.data());
      });
      setMessages(comingMessages);
    });
  }, []);

  //   console.log(messages);

  return (
    <>
      <div className="chat">
        <header className="chat-info">
          <p>{auth.currentUser.displayName}</p>
          <p>{room}</p>
          <a onClick={() => setRoom(null)}>Other Room</a>
        </header>
        <main>
          {messages.map((msg, i) => (
            <Message key={i} msg={msg} user={auth.currentUser.displayName} />
          ))}
        </main>
        <form onSubmit={handleSubmit}>
          <p>ı</p>
          <input placeholder="enter your text" type="text" />
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default Chat;
