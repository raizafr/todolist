import axios from "axios";
import { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { userState } from "../store";
import { Link } from "react-router-dom";

const Home = () => {
  // const [globalUsers, setGlobalUsers] = useRecoilState(userState);

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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

  useEffect(() => {
    getUser();
  }, []);

  const destroy = (e, id) => {
    axios
      .delete(
        "https://6431cb05d4518cfb0e6939e5.mockapi.io/api/v1/userinfo/" + id,
        {}
      )
      .then((response) => {
        alert("user deleted");
        getUser();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <section className="mt-10 flex justify-center">
        <table className=" border border-gray-700 border-separate border-spacing-1">
          <thead>
            <tr className="">
              <th className="border border-gray-700 py-3 px-4">name</th>
              <th className="border border-gray-700  px-5">contact</th>
              <th className="border border-gray-700  px-5">address</th>
              <th className="border border-gray-700  px-16">action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((user) => {
              return (
                <tr className="py-9" key={user.id}>
                  <>
                    <td className="border border-gray-700 px-1">{user.name}</td>
                    <td className="border border-gray-700 px-1">
                      {user.phone}
                    </td>
                    <td className="border border-gray-700 px-1">
                      {user.address}
                    </td>
                    <td className="space-x-2 text-center border border-gray-700 py-2">
                      <Link
                        to={"/detail/" + user.id}
                        className="bg-teal-400 px-1 py-0.5 rounded text-white"
                      >
                        detail
                      </Link>
                      <Link
                        to={"/edit/" + user.id}
                        className="bg-amber-400 px-1 py-0.5 rounded text-white"
                      >
                        edit
                      </Link>
                      <Link
                        onClick={(e) => destroy(e, user.id)}
                        className="bg-red-600 px-1 py-0.5 rounded text-white"
                      >
                        delete
                      </Link>
                    </td>
                  </>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      {/* paginate */}
      <nav className="flex justify-center mt-3">
        <ul className="flex space-x-1">
          <li className="bg-green-400 text-white px-2 rounded-sm hover:bg-green-500">
            <Link onClick={prevPage}>Prev</Link>
          </li>
          {numbers.map((n, i) => {
            return (
              <li
                key={i}
                className={
                  "border border-green-400 px-1 hover:bg-green-400 hover:text-white " +
                  (currentPage === n ? "bg-green-500 text-white" : "")
                }
              >
                <Link onClick={() => changeCPage(n)}>{n}</Link>
              </li>
            );
          })}
          <li className="bg-green-400 text-white px-2 rounded-sm hover:bg-green-500">
            <Link onClick={nextPage}>Next</Link>
          </li>
        </ul>
      </nav>
      {/* paginate */}
    </>
  );
};

export default Home;
