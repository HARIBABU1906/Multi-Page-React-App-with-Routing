import { useParams, useNavigate } from "react-router-dom";
import users from "../Data/User";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button onClick={() => navigate("/users")}>Go Back</button>
    </div>
  );
}

export default UserDetail;
