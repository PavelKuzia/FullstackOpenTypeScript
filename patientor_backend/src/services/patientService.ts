import patients from "../../data/patients";
import { Patient, nonSentitivePatientInformation, newPatientEntry } from "../types";
import { v1 as uuid } from 'uuid';
const id = uuid();

const getAllPatients = (): Patient[] => {
  return patients;
};

const getPatientById = (id: string): Patient | undefined => {
  return patients.find(p => p.id === id);
};

const getNonConfidentialPatientData = (): nonSentitivePatientInformation[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

const addPatient = (entry: newPatientEntry): Patient => {
  const newPatient = {
    id: id,
    ...entry
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getAllPatients,
  addPatient,
  getNonConfidentialPatientData,
  getPatientById
};
