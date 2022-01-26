import React, { useCallback, useState } from "react";
import axios from "axios";

// start HideShow
const MoreContent = () => {
  return(
    <p>
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  );
};
// end HideShow

// start API get user
const ShowUser = (props) => {
  const {listUser} = props;
  return(
    <div>
      {listUser.map((user, index) =>{
        return(
          <React.Fragment key={user.id}>
            <ul>
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
            <hr/>
          </React.Fragment>
        );
      })}
    </div>
  );
};
// end API get user
export default function App(props){

// start HideShow
  const [isShow, setShow] = useState(false);
// end HideShow

// start API get user
const [listUser, setListUser] = useState([]);
const [isloading, setLoading] = useState(false);

const getUserAPI = "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

const getUser = () => {
  setLoading(true);

  axios
    .get(getUserAPI)
    .then((res) => {
      setListUser(res.data);
    })
    .catch((err) => {
      alert("không truy cập được máy chủ")
    })
    .finally(() => {
      setLoading(false);
    });
};
// end API get user

  return(
    <div>

    {/* start HideShow */}
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

      {isShow === true ? <MoreContent/> : " "}
      {isShow === false ? <a href="#" onClick={() => {setShow(true)}}>Read more</a>: " "}
      {isShow === true ? <a href="#" onClick={() => {setShow(false)}}>Read more</a>: " "}
      <hr/>
    {/* end HideShow */}

    {/*start API get user */}
      <>
        <code>freetuts.net </code>
        {isloading ? "loading...": <button onClick={getUser}>Get user</button> }
        <ShowUser listUser={listUser} />
      </>
    {/*  end API get user */}
    </div>
  );


}
