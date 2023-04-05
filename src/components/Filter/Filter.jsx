import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const changeFilter = e => dispatch(filterContacts(e.currentTarget.value));

  return (
    <Label>
      <span>Find contacts by name</span>
      <input type="text" name="filter" value={value} onChange={changeFilter} />
    </Label>
  );
};
