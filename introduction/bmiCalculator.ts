const bmiCalculator = (a: number, b: number): string => {
  const bmi = b / Math.pow(a / 100, 2);
  if (bmi <= 18.5) {
		return 'Underweight';
	} else if (bmi > 14.5 && bmi <= 24.9) {
		return 'Normal (healthy weight)';
	} else {
		return 'Obese';
	}
};

/*
interface bmiValues {
    value1: number,
    value2: number
}

const parseArgumentsBmi = (args: string[]): bmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');
  
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

try {
  const { value1, value2 } = parseArgumentsBmi(process.argv);
  console.log(bmiCalculator(value1, value2));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
*/

export default bmiCalculator;