export const RequestApiBook = "RequestApiBook";
export const ResponseFromApiBook = "responseFromApiBook";

export const serchOutput = (data) => {
  return {
    type: ResponseFromApiBook,
    data,
  };
};
