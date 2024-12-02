import { useState, useContext } from "react";
import { UserDispatchContext, UserActionTypes } from "../../UserContext";
import "./styles.css";

// todo : update component so that it's possible to change username and save new username in the userContext
export const UserDetailsForm = () => {
  const [username, setUsername] = useState("");
  const dispatch = useContext(UserDispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    // Kullanıcı adı boş değilse dispatch ile güncelleme işlemini yap
    if (username.trim()) {
      dispatch({
        type: UserActionTypes.update,
        payload: { username }, // Yeni kullanıcı adını payload ile gönderiyoruz
      });
      console.log("Changed user name to", username);
    }
  }

  return (
    <form className="user-details-form" onSubmit={handleSubmit}>
      <label>
        Change your username:
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
