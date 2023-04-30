import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let userId = useParams();
  const [user, setUser] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get(
        "https://6431cb05d4518cfb0e6939e5.mockapi.io/api/v1/userinfo/" +
          userId.id
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  return (
    <section>
      <div>
        <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.phone}</li>
          <li>{user.address}</li>
        </ul>
      </div>
    </section>
  );
};

export default Detail;
