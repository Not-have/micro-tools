export default eventHandler(async () => {
  const menus = MOCK_MENU_LIST;

  return useResponseSuccess(menus);
});
