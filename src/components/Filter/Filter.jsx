import PropTypes from 'prop-types';


export const Filter = ({ filter, newContact }) => {
  return (
    <div>
      <input
       
        placeholder="Search..."
        type="text"
        name="filter"
        value={filter || ''}
        onChange={newContact}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  newContact: PropTypes.func.isRequired,
};