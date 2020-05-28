import React, { useReducer, useCallback, useEffect } from 'react';
import songReducer from '../../reducers/songs';
import useHttp from '../../hooks/http';

export default function Songs(props) {
  const [songList, dispatchSongList] = useReducer(songReducer, []);
  const { isLoading, error, data, sendRequest, extra, identifier, clear } = useHttp();

  useEffect(function() {
    if (!isLoading && !error && identifier === 'ADD_STORY') dispatchSongList({
      type: 'ADD',
      story: { id: data.name, ...extra }
    });
    else if (!isLoading && !error && identifier === 'REMOVE_STORY') dispatchSongList({
      type: 'DELETE',
      id: extra
    });
    else if (!isLoading && !error && identifier === 'UPDATE_STORY') dispatchSongList({
      type: 'UPDATE',
      story: data
    });
  }, [data, extra, identifier, isLoading, error]);

  const getSongsHandler = useCallback(function(songs) {
    dispatchSongList({ type: 'SET', songs });
    sendRequest(
      'https://api.spotify.com/v1/me/tracks',
      'GET',
      JSON.stringify(songs),
      songs
    );
  }, [sendRequest]);
  
  return (
    <div>
      {songList}
    </div>
  );
}