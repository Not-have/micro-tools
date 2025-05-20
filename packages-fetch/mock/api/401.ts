export default eventHandler(event => {
  setResponseStatus(event, 401);

  return useResponse401();
});
