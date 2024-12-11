import type { APIGatewayProxyEventV2 } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEventV2 ) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Get User By Id ${event.pathParameters?.userId}`,
      input: event,
    }),
  };
};
