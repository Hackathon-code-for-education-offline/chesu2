import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";

import image from '../assets/hall.jpg'


import {useAuthStore} from "../store/auth";
import Container from "../components/generic/container/Container";
import Strap from "../components/strap/Strap";

function MainPage() {
    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    return (
        <Container>
            <Strap>
                <h1>Welcome {user().username}</h1>
            </Strap>

        </Container>

    );
};

export default MainPage;
