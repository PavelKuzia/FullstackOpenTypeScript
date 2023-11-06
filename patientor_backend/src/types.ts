export interface Diagnosis {
  code: string,
  name: string,
  latin?: string
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Diagnosis['code'][];
}

enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface EntryDates {
  startDate: string;
  endDate: string;
}

interface EntryDischarge {
  date: string;
  criteria: string;
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: EntryDates;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: EntryDischarge;
}

export type Entry = HospitalEntry | OccupationalHealthcareEntry | HealthCheckEntry;

export interface Patient {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn?: string,
  gender: Gender,
  occupation: string,
  entries: Entry[]
}

export type nonSentitivePatientInformation = Omit<Patient, 'ssn'>;
export type newPatientEntry = Omit<Patient, 'id'>;