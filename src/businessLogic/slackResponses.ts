const responseInChannel = (message: string = "") => {
  return {
    response_type: "in_channel",
    text: message,
  };
};
export { responseInChannel };
