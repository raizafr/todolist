import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get(
        "https://6431cb05d4518cfb0e6939e5.mockapi.io/api/v1/userinfo"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  // console.log(user);

  return (
    <>
      <section className="mt-10 flex justify-center">
        <table className="border-collapse border border-gray-700 border-spacing-2">
          <thead>
            <tr>
              <th className="border border-gray-700 px-4">name</th>
              <th className="border border-gray-700 px-5">contact</th>
              <th className="border border-gray-700 px-5">address</th>
              <th className="border border-gray-700 px-16">action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="py-9" key={user.id}>
                  <>
                    <td className="border border-gray-700">{user.name}</td>
                    <td className="border border-gray-700">{user.phone}</td>
                    <td className="border border-gray-700">{user.address}</td>
                    <td className="space-x-2 text-center border border-gray-700">
                      <a href="" className="bg-teal-400 px-1 py-0.5 rounded-sm">
                        view
                      </a>
                      <a
                        href=""
                        className="bg-amber-400 px-1 py-0.5 rounded-sm"
                      >
                        edit
                      </a>
                      <a href="" className="bg-red-600 px-1 py-0.5 rounded-sm">
                        delete
                      </a>
                    </td>
                  </>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Home;
