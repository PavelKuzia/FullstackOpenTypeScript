interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

export const calculateExercises = (results: number[], target: number): Result => {
  const periodLength = results.length;
  const trainingDays = results.filter(d => d !== 0).length;
  const average = results.reduce((partialSum, a) => partialSum + a, 0) / results.length;
  const success = average > target;
  const ratingDescription = success ? 'good' : 'bad';
  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: 1,
    ratingDescription: ratingDescription,
    target: target,
    average: average
  };
};

/*
interface InputValues {
  results: number[],
  target: number
}

const parseArgumentsExercise = (args: string[]): InputValues => {
  if (args.length < 4) throw new Error('Not enough arguments');

  const target = Number(args[2]);
  const resultsStr = args.slice(3);
  
  const results = resultsStr.map(v => Number(v));

  if (!isNaN(Number(target)) && !results.some(isNaN)) {
    return {
      results: results,
      target: target
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

try {
  const { results, target } = parseArgumentsExercise(process.argv);
  console.log(calculateExercises(results, target));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
*/