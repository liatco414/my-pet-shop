export default function ProductCard({ title, image, description }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
            <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
