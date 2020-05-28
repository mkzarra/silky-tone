import { useReducer, useCallback } from 'react';
import httpReducer from '../reducers/http';

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null
}

export default function useHttp() {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);
  const clear = useCallback(function() {
    dispatchHttp({ type: 'CLEAR' });
  }, []);

  const sendRequest = useCallback(async function(url, method, body, extra, identifier) {
    dispatchHttp({ type: 'SEND', identifier });
    try {
      const response = await fetch(url, {
        method,
        body,
        headers: { "Content-Type": "application/json" }
      });
      const responseData = await response.json();
      dispatchHttp({ type: 'RESPONSE', responseData, extra });
    } catch (error) {
      dispatchHttp({ type: 'ERROR', responseError: error.message});
    }
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    extra: httpState.extra,
    identifier: httpState.identifier,
    sendRequest,
    clear
  }
}