import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { P, Ul } from './ContactList.styled';
export const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      {contacts.length <= 0 ? (
        <P>No contacts were found for this request</P>
      ) : (
        <Ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                deleteContacts={deleteContacts}
              />
            );
          })}
        </Ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContacts: PropTypes.func.isRequired,
};
