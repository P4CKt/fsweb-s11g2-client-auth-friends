import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
const Logout = () => {
  const history = useHistory();
  localStorage.getItem("token")
    ? axiosWithAuth(localStorage.getItem("token"))
        .post("http://localhost:9000/api/logout")
        .then((res) => {
          console.log(res);
          localStorage.removeItem("token");
          setTimeout(() => {
            history.push("/login");
            window.location.reload(false);
          }, 5000);
        })
        .catch((error) => console.log(error))
    : history.push("/login");

  return (
    <h1 className="  text-center text-[70px] items-center justify-center flex  mt-16 p-6 font-black">
      You are redirected to the login page.
    </h1>
  );
};

export default Logout;
