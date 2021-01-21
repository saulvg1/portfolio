export default function Skill({ image, name }) {
  return (
    <div className="skill">
      <img src={image} alt={image} />
      <h2>{name}</h2>
    </div>
  );
}
