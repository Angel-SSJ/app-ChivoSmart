import Svg, { Path } from "react-native-svg";
import { Image } from "react-native";
import React from "react";

interface Props {
    active?: boolean;
}

const Home = ({ active = false }: Props) => {
    return (
        <>
            {active ? (
                <Image
                    source={require("@/assets/icons/home-filled.png")}
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
            ) : (
                <Image
                    source={require("@/assets/icons/home-outline.png")}
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
            )}
        </>
    );
};

export default Home;
