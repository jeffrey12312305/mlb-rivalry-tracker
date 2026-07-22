export default function StatCard({ title, value }) {
  return (
    <article className="stat-card">
      <p className="stat-card__title">{title}</p>
      <p className="stat-card__value">{value}</p>
    </article>
  );
}
