import "./App.css";
import { UserContext, FriendsContext } from "./Contexts/UserContext";
import { Switch, Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import FriendsList from "./components/FriendsList";
import { PrivateRoute } from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import { useHistory } from "react-router-dom";
import Detail from "./components/Detail";
function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [friends, setFriends] = useState([]);
  const [newFriends, setNewFriends] = useState({
    name: "",
    email: "",
  });
  const history = useHistory();
  useEffect(() => {
    history.push("/login");
  }, []);

  return (
    <div className="App">
      <div className=" min-w-[1160px] flex text-[30px] border-black border-b-4 py-4 justify-around  items-center">
        <h1 className=" ml-2  text-black font-black mr-24">FRIENDS DATABASE</h1>
        <NavLink className=" bg-black  p-5 text-white" to="/login">
          LOGIN.
        </NavLink>
        <NavLink to="/friends" className=" bg-black  p-5 text-white">
          FRIENDSLIST.
        </NavLink>
        <NavLink to="/friends/add" className=" bg-black  p-5 text-white">
          ADDFRIEND.
        </NavLink>
        <NavLink to="/logout" className=" mr-2 bg-black  p-5 text-white">
          LOGOUT
        </NavLink>
      </div>
      <div className=" min-w-[1160px]">
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Route exact path="/login" component={Login} />

            <FriendsContext.Provider
              value={{ friends, setFriends, newFriends, setNewFriends }}
            >
              <PrivateRoute exact path="/friends" component={FriendsList} />

              <PrivateRoute exact path="/friends/add" component={AddFriend} />

              <Route exact path="/friends/detail/:id" component={Detail} />

              <PrivateRoute exact path="/logout" component={Logout} />
            </FriendsContext.Provider>
          </UserContext.Provider>
        </Switch>
      </div>
    </div>
  );
}

export default App;
