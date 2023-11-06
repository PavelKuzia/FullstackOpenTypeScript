import data from "../../data/diagnoses";
import { Diagnosis } from "../types";

const getDiagnosis = (): Diagnosis[] => {
  return data;
};

const addDiagnosis = () => {
  return null;
};

export default {
  getDiagnosis,
  addDiagnosis
};
