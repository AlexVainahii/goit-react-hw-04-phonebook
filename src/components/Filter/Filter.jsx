import { Input } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import { Card } from './Filter.styled';
export const Filter = ({ filterContacts }) => {
  return (
    <Card>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        onChange={e => {
          filterContacts(e);
        }}
      />
    </Card>
  );
};
Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
