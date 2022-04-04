import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";
import { updateProfile } from "../store/profile";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, isVisibleProfile } = useSelector(
    (state) => state.profile
  );
 /* const { name, number } = useSelector (
    (state) =>state.profile
  );*/


  return (
    <div>
      <h1>ProfilePage</h1>
      <button onClick={() => dispatch(toggleVisibleProfile())}>
        toggle profile visible
      </button>

      {isVisibleProfile && (
        <>
          <h3>
            firstName: <span>{firstName}</span>
          </h3>
          <h3>
            lastName: <span>{lastName}</span>
          </h3>
        </>
      )}
    </div>
  );

};


export const ProfileData = () => {
  const dispatch = useDispatch();
  const { name, number, isVisibleProfile } = useSelector (
    (state) =>state.profile
  );


  return (
    <div>
      <h1>ProfilePage</h1>
      <button onClick={() => dispatch(updateProfile())}>
        toggle profile visible
      </button>

      {isVisibleProfile && (
        <>
          <h3>
            name: <span>{name}</span>
          </h3>
          <h3>
            number: <span>{number}</span>
          </h3>
        </>
      )}
    </div>
  );

};