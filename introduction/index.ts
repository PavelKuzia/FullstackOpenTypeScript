import express from 'express';
import bmiCalculator from './bmiCalculator';
import { calculator } from './calculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  if (!isNaN(height) && !isNaN(weight)) {
    const response = {
      weight: weight,
      height: height,
      bmi: bmiCalculator(height, weight)
    };
    res.send(response);
  } else {
    res.send('Not valid input!');
  }
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), op);
  res.send({ result });
});


app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  console.log(req.body);
  if (daily_exercises && target) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const results: number[] = daily_exercises.map((v: string) => Number(v));
    const setTarget = Number(target);
    if (!results.some(isNaN) && !isNaN(setTarget)) {
      res.send(calculateExercises(results, setTarget));
    } else {
      res.send({
        error: "malformatted parameters"
      });
    }
  } else {
    res.send({
      error: "parameters missing"
    });
  }
});


const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});