import { useEffect,useRef } from "react";

const phrases = [
    "We are a brand desing studio",
];
function FrasesCarrusel() {
    const boxRef = useRef(null);
    const positionRef = useRef(0);
    const animationRef = useRef(null);

    useEffect(() => {
        const box = boxRef.current;
        if (!box) return;

        const animate = () => {
            positionRef.current += -1;
            box.style.transform = `translateX(${positionRef.current}px)`;
            animationRef.current = requestAnimationFrame(animate);
        };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
        cancelAnimationFrame(animationRef.current);
    };
    }, []);
return (
    <div className="container-fluid overflow-hidden bg-dark text-light align-middle p-3">
        <span className="align-middle float-end">
            <img className=" mx-4" src="/src/assets/react.svg" alt="" />
            <p className="float-end m-0 h5" >{phrases}</p>
        </span>
    </div>
    
    )
}

export default FrasesCarrusel;

