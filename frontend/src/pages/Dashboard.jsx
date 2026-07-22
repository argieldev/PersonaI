import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AiPanel from "../components/AiPanel";

function Dashboard() {
  useEffect(() => {
    async function loadWorkspace() {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3000/loadWs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data);
    }

    loadWorkspace();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <h1>Welcome $User</h1>
      </div>
      <AiPanel />
    </>
  );
}

export default Dashboard;