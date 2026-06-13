import "./dialog.css";

// Isto é um componente funcional
export const Dialog = ({dialogRef, isOpen, setIsOpen, children}) => {
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <dialog className='dialog' ref={dialogRef}>
                <button autoFocus={true} onClick={toggle}>Close</button>
                {children}
            </dialog>
            <button onClick={toggle}>Show dialog!</button>
        </>
    )
};