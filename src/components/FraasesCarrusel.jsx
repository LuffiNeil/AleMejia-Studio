const phrases = [
    "Technology that works for you",
    "Building solutions, not just software",
    "Innovation starts with simplicity",
    "Performance. Scalability. Reliability."
];

function FrasesCarrusel() {
return (
    <div
        id="phraseCarousel"
        className="carousel slide mx-auto bg-black text-light"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
    >
    <div className="carousel-inner text-center">
        {phrases.map((phrase, index) => (
        <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
        >
            <p className="fw-semibold h2">{phrase}</p>
        </div>
        ))}
        </div>
    </div>
    );
}

export default FrasesCarrusel;