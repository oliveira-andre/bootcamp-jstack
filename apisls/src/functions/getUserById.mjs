export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Get User By Id ${event.pathParameters.userId}`,
      input: event,
    }),
  };
};
