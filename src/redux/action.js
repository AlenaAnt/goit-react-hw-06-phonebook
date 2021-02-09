export const addContact = value => ({
  type: 'Phonebook/Addcontact',
  payload: value,
});
export const deleteContact = value => ({
  type: 'Phonebook/Deletecontact',
  payload: value,
});
export const filterContact = value => ({
  type: 'Phonebook/Filtercontact',
  payload: value,
});
