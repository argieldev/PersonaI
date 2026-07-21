import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) {
      navigate(`/${user.username}/dashboard`);
    }
  })

  function handleRegister(event) {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    };

    fetch("http://localhost:3000/auth/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate(`/${data.user.username}/dashboard`);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });

    console.log("clicked");
  }

  return (
    <>
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>
    </>
  );
}

export default Register;
