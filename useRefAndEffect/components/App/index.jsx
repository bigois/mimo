import {Dialog} from "../Dialog";
import {createElement, useEffect, useRef, useState} from "react";

export const App = () => {
    const divRef = useRef(null);
    const dialogRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    // 1. Executa sempre que a propriedade mudar
    useEffect (() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [isOpen]);

    // 2. Executa apenas uma vez, após o componente montar
    useEffect(() => {
        setCounterA(counterA + 1);
        h1Ref.current.innerHTML = `Hello! (${counterA}x)`;
    }, []);

    // 3. Executa cada vez que a tela atualizar (normalmente usam setTimeout)
    // Quando fazemos setCounter, ele atualiza o componente e entra em looping infinito
    useEffect(() => {
        // setTimeout(() => {
            setCounterB(counterB + 1);
            h2Ref.current.innerHTML = `Hello! (${counterB}x)`;
        // }, 500);
    });

    return (
        <div ref={divRef}>
            <h1 ref={h1Ref}></h1>
            <h2 ref={h2Ref}></h2>
            <Dialog dialogRef={dialogRef}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
            >
                <p>Jesus is king!</p>
            </Dialog>
            <br/>
            <br/>
        </div>
    )
};