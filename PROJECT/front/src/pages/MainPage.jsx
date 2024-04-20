import React from 'react';
import {useAuthStore} from "../store/auth";

function MainPage() {
    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    return (
      <>
          <h1>Welcome {user().username}</h1>
      </>
    );
};

export default MainPage;
