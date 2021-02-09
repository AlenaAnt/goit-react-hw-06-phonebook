// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const lsKey = 'contacts';
const initialstate = () => {
  let contacts = [];
  if (localStorage.getItem(lsKey)) {
    contacts = JSON.parse(localStorage.getItem(lsKey));
  }
  return {
    contacts: contacts,
    filter: '',
  };
};

// const contactsReducer = (state = initialstate(), { type, payload }) => {
//   const { contacts } = state;
//   switch (type) {
//     case 'Phonebook/Addcontact':
//       localStorage.setItem(lsKey, JSON.stringify([...contacts, payload]));
//       return {
//         ...state,
//         contacts: [...contacts, payload],
//       };
//     case 'Phonebook/Deletecontact':
//       const filterConttact = contacts.filter(contact => contact.id !== payload);
//       localStorage.setItem(lsKey, JSON.stringify(filterConttact));
//       return {
//         ...state,
//         contacts: filterConttact,
//       };

//     default:
//       return state;
//   }
// };

const reducer = (state = initialstate(), { type, payload }) => {
  const { contacts } = state;
  switch (type) {
    case 'Phonebook/Addcontact':
      localStorage.setItem(lsKey, JSON.stringify([...contacts, payload]));
      return {
        ...state,
        contacts: [...contacts, payload],
      };
    case 'Phonebook/Deletecontact':
      const filterConttact = contacts.filter(contact => contact.id !== payload);
      localStorage.setItem(lsKey, JSON.stringify(filterConttact));
      return {
        ...state,
        contacts: filterConttact,
      };
    case 'Phonebook/Filtercontact':
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};
// const store = createStore(reducer);
const store = configureStore({
  reducer: {
    todos: persistReducer(todosPersistConfig, todosReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
