import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  let userId = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [submit, setSubmit] = useState({
    name: "",
    phone: "",
    address: "",
  });

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
  const handSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        "https://6431cb05d4518cfb0e6939e5.mockapi.io/api/v1/userinfo/" +
          userId.id,
        submit
      )
      .then(function (response) {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <section className="mx-auto px-7 mt-9 md:mt-20 md:w-3/5 lg:w-2/6">
        <form
          onSubmit={handSubmit}
          className="bg-gradient-to-b  from-green-500 to-primary-1 py-5 space-y-3 rounded"
        >
          <div className="text-lg text-white text-center font-semibold">
            Edit Data {user.name}
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col w-3/4">
              <label htmlFor="name" className="text-white text-xs">
                Name
              </label>
              <input
                defaultValue={user.name}
                onChange={(e) => setSubmit({ ...submit, name: e.target.value })}
                required
                minLength={5}
                maxLength={25}
                type="text"
                name="name"
                id="name"
                placeholder="enter name"
                className="mt-0.5 w-full px-2 text-sm py-0.5 "
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col w-3/4">
              <label htmlFor="contact" className="text-white text-xs">
                Phone Number
              </label>
              <input
                defaultValue={user.phone}
                onChange={(e) =>
                  setSubmit({ ...submit, phone: e.target.value })
                }
                minLength={11}
                maxLength={13}
                required
                type="tel"
                name="contact"
                id="contact"
                placeholder="enter phone number"
                className="mt-0.5 w-full px-2 text-sm py-0.5 "
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col w-3/4">
              <label htmlFor="address" className="text-white text-xs">
                Address
              </label>
              <input
                defaultValue={user.address}
                onChange={(e) =>
                  setSubmit({ ...submit, address: e.target.value })
                }
                minLength={3}
                maxLength={25}
                required
                type="text"
                name="address"
                id="address"
                placeholder="enter address"
                className="mt-0.5 w-full px-2 text-sm py-0.5 "
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="text-white text-center text-lg px-7 py-2 bg-green-400 rounded-full hover:bg-green-600">
              Create
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Update;
