import { useMemo, useState } from "react"

export type Row = { id: string; name: string; email: string }

type Props = { rows: Row[] }

export function DataTable({ rows }: Props) {
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<"name" | "email">("name")
  const visible = useMemo(() => rows.filter((row) => `${row.name} ${row.email}`.toLowerCase().includes(query.toLowerCase())).slice().sort((a, b) => a[sort].localeCompare(b[sort])), [rows, query, sort])
  return <section aria-label="Contacts"><label>Filter contacts<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} /></label><table><thead><tr><th scope="col"><button onClick={() => setSort("name")}>Name</button></th><th scope="col"><button onClick={() => setSort("email")}>Email</button></th></tr></thead><tbody>{visible.map((row) => <tr key={row.id}><td>{row.name}</td><td>{row.email}</td></tr>)}</tbody></table></section>
}
