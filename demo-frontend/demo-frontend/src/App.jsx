import { useState } from "react";
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [id, setId] = useState(null);
  const getUsers = () => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((resp) => {
        setUsers(resp.status.data);
      })
      .catch((err) => console.log("err", err));
  };

  const getUsersbyId = () => {
    if (id) {
      fetch(`http://localhost:8080/users/${id}`)
        .then((res) => res.json())
        .then((resp) => {
          const data = resp.status.data;
          if (data?.length) {
            setUser(data);
          } else {
            alert("enter id between 1 to 10");
          }
        })
        .catch((err) => console.log("err", err));
    } else {
      alert("enter the id");
    }
  };

  return (
    <div className="container">
      <div>
        <button onClick={getUsers}>get users</button>
        {users?.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          style={{ marginBottom: "10px" }}
          type="number"
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder="Enter the id"
        />
        <button onClick={getUsersbyId}>get user</button>
        <p>{user[0]?.name}</p>
      </div>
    </div>
  );
}

export default App;
