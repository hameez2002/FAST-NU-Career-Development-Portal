import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DeletePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:4000/newsfeed/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Delete response:", response);
  
      if (response.ok) {
        navigate("/");
      } else {
        const data = await response.json();
        console.error("Delete failed:", data.error);
      }
    } catch (error) {
      console.error("Delete failed:", error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
