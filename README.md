# react-data-table

Small accessible, filterable and sortable contact table.

## Development

Install Node.js 20+ and run:

```sh
npm install
npm test
npm run build
```

## Architecture

The table is a typed React component. It receives data via props; filtering and sorting are local and require no service or credentials. Native HTML table semantics and buttons preserve keyboard access.
