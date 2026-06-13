import React from "react";
import {AbsoluteCenter, Button, Heading, Separator, Stack} from "@chakra-ui/react";

const App = () => {
    const [counter, setCounter] = React.useState(1);

    const handleClick = () => {
        alert(`Parabéns! (${counter}x)`);
        setCounter(counter + 1);
    }

    return (
        <div className={"messageButton"}>
            <AbsoluteCenter>
                <Stack>
                    <Heading>Olá, React Essentials!</Heading>
                    <Separator/>
                    <Button onClick={handleClick}>Clique aqui!</Button>
                </Stack>
            </AbsoluteCenter>
        </div>
    );
};

export default App;
