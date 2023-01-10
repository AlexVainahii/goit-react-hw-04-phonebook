import PropTypes from 'prop-types';
import { But } from './ContactItem.styled';
export const ContactItem = ({ id, name, number, deleteContacts }) => {
  return (
    <li>
      {name} : {number}
      <But
        type="button"
        onClick={() => {
          deleteContacts(id);
        }}
      >
        Delete contacts
      </But>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
