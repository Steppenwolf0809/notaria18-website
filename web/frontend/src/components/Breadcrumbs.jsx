import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items = [] }) {
  if (!items?.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted my-4">
      <ol className="flex items-center gap-2">
        {items.map((bc, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-muted/70">/</span>}
            {i === items.length - 1 ? (
              <span className="text-ink">{bc.name}</span>
            ) : (
              <Link className="hover:text-primary-700" to={bc.path}>{bc.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}