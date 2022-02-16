function contactsFilter(contactList, filter) {
  const normalizedFilter = filter.toLowerCase().trim();
  return contactList.filter((contact) => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
}
export default contactsFilter;