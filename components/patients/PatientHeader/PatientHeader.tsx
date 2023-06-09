import { FC, ReactNode } from 'react';

import HealthRating from '../HealthRating/HealthRating';

import { PatientType } from '@/models/patient';

import classes from './PatientHeader.module.css';

interface PatientHeaderProps {
  patient: PatientType;
  genderSymbol: ReactNode;
}

const PatientHeader: FC<PatientHeaderProps> = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes.header}>
          <p>{props.patient.name}</p>
          <p>{props.genderSymbol}</p>
        </h2>
        <h5>SN: {props.patient.identificationNumber}</h5>
        <h5>Occupation: {props.patient.occupation}</h5>
      </div>
      <div>
        <HealthRating healthRating={props.patient.healthRating} />
      </div>
    </div>
  );
};

export default PatientHeader;
