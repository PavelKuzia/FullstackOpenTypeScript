import { useState, useEffect } from 'react';
import axios from 'axios';
import { DiaryEntry } from './types'


const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const [visibility, setVisibility] = useState('great');
  const [weather, setWeather] = useState('sunny');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const errorMessageStyle = {
    color: 'red',
    fontSize: 14
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/diaries').then(response => {
      setDiaries(response.data);
    })
  }, [])

  const createDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newDiaryEntry = {
      id: diaries.length + 1,
      date: date,
      visibility: visibility,
      weather: weather,
      comment: comment
    };

    axios.post<DiaryEntry>('http://localhost:3000/api/diaries', newDiaryEntry)
    .then(response => setDiaries(diaries.concat(response.data)))
    .catch(error => {
      setErrorMessage(error.response.data);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    })
    
    setDate('');
    setVisibility('');
    setWeather('');
    setComment('');
  }

  return (
    <div>
      <h2>Diaries</h2>
      <div style={errorMessageStyle}><p>{errorMessage}</p></div>
      <form onSubmit={createDiary}>
        <div>
          date <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </div>
        <div>
          visibility 
          <input type='radio' name='visibility' value='great' checked={visibility === 'great'} onChange={() => setVisibility('great')} /> <label>great</label>
          <input type='radio' name='visibility' value='good' checked={visibility === 'good'} onChange={() => setVisibility('good')} /> <label>good</label>
          <input type='radio' name='visibility' value='ok' checked={visibility === 'ok'} onChange={() => setVisibility('ok')} /> <label>ok</label>
          <input type='radio' name='visibility' value='poor' checked={visibility === 'poor'} onChange={() => setVisibility('poor')} /> <label>poor</label>
        </div>
        <div>
          weather
          <input type='radio' name='weather' value='sunny' checked={weather === 'sunny'} onChange={() => setWeather('sunny')} /> <label>sunny</label>
          <input type='radio' name='weather' value='rainy' checked={weather === 'rainy'} onChange={() => setWeather('rainy')} /> <label>rainy</label>
          <input type='radio' name='weather' value='cloudy' checked={weather === 'cloudy'} onChange={() => setWeather('cloudy')} /> <label>cloudy</label>
          <input type='radio' name='weather' value='stormy' checked={weather === 'stormy'} onChange={() => setWeather('stormy')} /> <label>stormy</label>
          <input type='radio' name='weather' value='windy' checked={weather === 'windy'} onChange={() => setWeather('windy')} /> <label>windy</label>
        </div>
        <div>
          comment <input value={comment} onChange={(event) => setComment(event.target.value)} />
        </div>
        <button type='submit'>add</button>
      </form>
      <br />
      {diaries.map((diary, i) => (
          <div key={i}>
            <div><b>{diary.date}</b></div>
            <br />
            <div>Weather: {diary.weather}</div>
            <div>Visibility: {diary.visibility}</div>
            <br /><br />
          </div>
        ))}
    </div>
  );
};

export default App;