export default function songReducer(currentSongs, action) {
  switch (action.type) {
    case 'SET':
      return action.Songs;

    case 'ADD':
      return [...currentSongs, action.song];

    case 'DELETE':
      return currentSongs.filter(function (song) {
        return song.id !== action.id;
      });

    case 'UPDATE':
      return [action.song];

    default:
      return null;
  }
}