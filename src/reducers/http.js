export default function httpReducer(httpState, action) {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier
      }

    case "RESPONSE":
      return {
        ...httpState,
        loading: false,
        data: action.responseData,
        extra: action.extra
      }

    case "ERROR":
      return {
        loading: false,
        error: action.responseError
      }

    case "CLEAR":
      return httpState
    default:
      return null;
  }
}