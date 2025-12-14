
function Button ({label,className}) {
    return (
    <button className={`btn ${className || ""}`}>
        {label}
    </button>
    );
}           
export default Button