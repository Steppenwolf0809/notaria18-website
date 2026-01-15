export default function ServiceCard({ title, description, href = '/servicios' }) {
  return (
    <a href={href} className="p-6 bg-white rounded-xl shadow-sm border block hover:shadow focus:outline-none focus:ring-2 focus:ring-primary-600">
      <div className="text-primary-600 font-semibold">{title}</div>
      <p className="text-sm text-muted mt-1">{description}</p>
    </a>
  );
}