export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      input: event,
    }),
  };
};
