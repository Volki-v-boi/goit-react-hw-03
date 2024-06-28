export default function Contact({ onDelete, contact }) {
  return (
    <div>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
