
function Message() {
  const name = "John";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello {name}</h1>;
}

export default Message;
// or
// export {Message}
