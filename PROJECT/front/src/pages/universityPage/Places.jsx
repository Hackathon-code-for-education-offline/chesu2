import React, {useEffect, useState} from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import styles from './UniversityPage.module.css';


import {useAuthStore} from "../../store/auth";
import PostCard from "./PostCard";
import {Button, TransparentButton} from "../../components/generic/button/Button";
import Strap from "../../components/strap/Strap";
import Container from "../../components/generic/container/Container";

function Places({places}) {
    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    const [index, setIndex] = useState(0);
    // const [image, setImage] = useState(places[0].place_image);

    function hundleSetPlaceImage(index) {
        setIndex(index);
    }

    const config = {
        autoLoad: true,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        width: 1000,
        height: "800px",
    };

    return (
        <Container>
            <Strap extraClasses={[styles.placesList]}>
                {places.map((place, i) => (
                    <TransparentButton extraClasses={[styles.placeButton]} active={i === index} onClick={() => hundleSetPlaceImage(i)}
                                       key={place.id}>{place.name}</TransparentButton>
                ))}

                <ReactPannellum
                    id="1"
                    key={index}
                    sceneId="firstScene"
                    imageSource={places[index].place_image}
                    config={config}
                    className={styles.pannellum}
                    style={{
                        width: "100%",
                        height: "500px",
                    }}
                />
            </Strap>
        </Container>
);
}

export default Places;
