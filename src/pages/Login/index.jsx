import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeFormLogin = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    validateLogin(e);
  };

  const postLogin = () => {
    const password = form.password;
    signInWithEmailAndPassword(auth, form.email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("user", user);
        navigate("/administrator/jobs");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const clickLogin = (e) => {
    e.preventDefault();
    postLogin();
  };

  const validateLogin = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "email") {
      // validasi email tidak boleh kosong
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          email: "Email tidak boleh kosong.",
        });
      } else if (!emailRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          email: "Masukkan email yang valid.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          email: "",
        });
      }
    } else if (name === "password") {
      // validasi password tidak boleh kosong
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          password: "Password tidak boleh kosong.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          password: "",
        });
      }
    }
  };

  return (
    <div>
      <div className="bg-[#F4F5F7] p-6 text-center text-[25px]">Login</div>
      <div className="flex justify-center mt-14">
        <div className="p-5 border border-[#E3E3E3] rounded-[10px] w-4/12">
          <form action="">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className={`bg-white border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 placeholder-[#AEB0B4] dark:text-white ${
                  errorMsg.email ? " border-red-600" : "border-gray-300"
                } focus:outline-none ${
                  errorMsg.email
                    ? " focus:ring-red-600 focus:border-red-600"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="Email"
                onChange={(e) => changeFormLogin(e)}
              />
              {errorMsg.email ? (
                <p
                  id="filled_success_help"
                  className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errorMsg.email}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className={`bg-white border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 placeholder-[#AEB0B4] dark:text-white ${
                  errorMsg.password ? " border-red-600" : "border-gray-300"
                } focus:outline-none ${
                  errorMsg.password
                    ? " focus:ring-red-600 focus:border-red-600"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="Password"
                onChange={(e) => changeFormLogin(e)}
              />
              {errorMsg.password ? (
                <p
                  id="filled_success_help"
                  className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errorMsg.password}
                </p>
              ) : (
                <></>
              )}
            </div>
            <button
              type="button"
              className="py-2 px-8 rounded-[10px] text-white bg-[#10B981]"
              onClick={(e) => clickLogin(e)}
              // onClick={(e) => onClickDataFilter(e)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
