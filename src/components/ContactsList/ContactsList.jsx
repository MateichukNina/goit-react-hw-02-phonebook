export const ContactsList = ({contacts}) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
          </li>
        );
      })}
    </ul>
  )
}