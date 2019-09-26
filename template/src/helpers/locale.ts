export const reduceMessages = (result: any) =>
  result.reduce((acc: any, msg: any) => ({ ...acc, [msg.id]: msg.message || msg.defaultMessage }), {});
