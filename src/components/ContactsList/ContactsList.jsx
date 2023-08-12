import PropTypes from 'prop-types';


export const ContactsList = ({selectedContact, deleteContact}) => {
  return (
    <ul>
      {selectedContact.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  )
}


ContactsList.propTypes = {
  selectedContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};