export default function BaseCard({ title, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card__content">{content}</div>
    </div>
  );
}
