import { Patient, Diagnosis } from "../types";
import { useParams } from 'react-router-dom';

interface Props {
  patients: Patient[];
  diagnoses: Diagnosis[];
}

const SinglePatient = ({patients, diagnoses}: Props) => {
  const id = useParams().id;
  const patient = patients.find(patient => patient.id === id) as Patient;

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>gender: {patient.gender}</p>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
      <h3>Entries:</h3>
      {patient.entries.map((entry, i) => (
        <div>
          <p key={i}>{entry.date} <i>{entry.description}</i></p>
          <ul>
            {entry.diagnosisCodes?.map((code: string, i: number) => (<li key={i}>
              {code} {diagnoses.find(d => d.code === code)?.name}
            </li>))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SinglePatient;