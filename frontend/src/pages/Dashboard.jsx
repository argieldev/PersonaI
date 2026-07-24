import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AiPanel from "../components/AiPanel";

function Dashboard() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  // Checks if user has token
  useEffect(() => {
    async function loadWorkspace() {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:3000/auth/loadWs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        if (!response.ok) {
          navigate("/server-error");
          return;
        }

        const data = await response.json();
        setUser(data.username);
        console.log(data);
      } catch (error) {
        // Express isn't running or another network error occurred
        navigate("/server-error");
      }
    }

    loadWorkspace();
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col p-8">
        <Navbar name={user} />

        <div className="flex-1 flex gap-8">
          <Sidebar />

          <main className="flex-1 flex items-center justify-center">Widgets here</main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;