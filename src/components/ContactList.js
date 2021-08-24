const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name}
                    <span>: </span>
                    {contact.number}
                     <span> </span>
                    <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                </li>))}
        </ul>
    );
}

export default ContactList;