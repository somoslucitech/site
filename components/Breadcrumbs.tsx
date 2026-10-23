import Link from 'next/link'
import { SITE_URL } from '@/lib/content'

type Crumb = { label: string; href: string }

// Visible trail plus its BreadcrumbList schema, built from the same list
export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === '/' ? '' : c.href}`,
    })),
  }
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-slate-700 dark:text-slate-300">{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:text-[#007C80] dark:hover:text-[#00CED1] transition-colors">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
