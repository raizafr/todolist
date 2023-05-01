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

  return (
    <section className="flex justify-center mt-6">
      <div className="bg-green-500 w-11/12 md:w-1/4 px-6 py-4 text-white">
        <table>
          <tr>
            <td>user id</td>
            <td>: </td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>name</td>
            <td>: </td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>contact</td>
            <td>: </td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>: </td>
            <td>{user.address}</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Detail;
