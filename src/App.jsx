import { useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import Auth from "./pages/Auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Chat from "./pages/Chat";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [room, setRoom] = useState(null);

  // kullanıcının oturumunda ki durumu izleriz.
  // kullanıcı varsa çalıştırdığı fonksiyona parametre olarak gönderir.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else setIsAuth(false);
    });
  }, []);

  // enter room
  const handleSubmit = (e) => {
    e.preventDefault();
    setRoom(e.target[0].value);
  };

  //logout
  const handleLogout = () => {
    // useraccount logout
    signOut(auth)
      .then(() => console.log("Success"))
      .catch((err) => console.log("Unsuccess", err));
  };

  // console.log(auth);

  /* eğer kullanıcı varsa oda seç gösterir, yoksa singUp ekranını */
  if (!isAuth) {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }

  // kullanıcı varsa gösterir.
  return (
    <>
      <div className="container">
        {room ? (
          <Chat room={room} setRoom={setRoom} />
        ) : (
          <form onSubmit={handleSubmit} className="room-container">
            <h1>Chat Room</h1>
            <p>Enter room name </p>
            <input type="text" />
            <button className="log-in" type="submit">
              Enter the Room
            </button>
            <button onClick={handleLogout} className="log-out" type="button">
              Log out
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default App;
