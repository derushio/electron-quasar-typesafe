type NotArray<U> = U extends Array<unknown> ? never : U;

export type ResponseType<U> = NotArray<U> | U[];

export function response<U>(response: NotArray<U>): {
  response: NotArray<U>;
} {
  return {
    response: response,
  };
}

export function responseList<U>(
  responseList: U[],
  allCount: number,
): {
  responseList: U[];
  allCount: number;
} {
  return {
    responseList: responseList,
    allCount,
  };
}

export function responseOk() {
  return {
    response: {
      status: 'OK',
    },
  };
}
