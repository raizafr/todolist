import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../store";
import { Link } from "react-router-dom";

const Home = () => {
  // const [globalUsers, setGlobalUsers] = useRecoilState(userState);
  const [users, setUsers] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get(
        "https://6431cb05d4518cfb0e6939e5.mockapi.io/api/v1/userinfo"
      );
      setUsers(response.data);
      // setGlobalUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  // console.log(globalUsers);

  useEffect(() => {
    getUser();
  }, []);

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
                      <Link
                        to={"/detail/" + user.id}
                        className="bg-teal-400 px-1 py-0.5 rounded-sm"
                      >
                        detail
                      </Link>
                      <Link
                        // to={"/edit/" + user.id}
                        className="bg-amber-400 px-1 py-0.5 rounded-sm"
                      >
                        edit
                      </Link>
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
