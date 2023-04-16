import { FC, useContext } from 'react';

import NewPatientCard from '../NewPatientCard/NewPatientCard';
import ViewPatientsCard from '../ViewPatientsCard/ViewPatientsCard';

import { Patient } from '@/types/patient';

import { UserContext, UserContextType } from '@/context/UserContext';

interface HomeCardsProps {
  patients: Array<Patient>;
}

const HomeCards: FC<HomeCardsProps> = (props) => {
  const { user } = useContext<UserContextType>(UserContext);

  return (
    <>
      <ViewPatientsCard user={user} patients={props.patients} />

      <NewPatientCard />
    </>
  );
};

export default HomeCards;