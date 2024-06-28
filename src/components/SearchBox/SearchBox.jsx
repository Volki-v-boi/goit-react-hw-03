export default function SearchBox({ filter, onFilterChange }) {
  return (
    <input
      type="text"
      placeholder="Find contacts by name..."
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}
