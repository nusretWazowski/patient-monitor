import { FC, useState, useContext, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

import Card from '@/components/shared/Card/Card';
import UpcomingAppointmentItem from './UpcomingAppointmentItem/UpcomingAppointmentItem';

import { AppointmentType } from '@/models/appointment';

import classes from './UpcomingAppointments.module.css';

interface UpcomingAppointmentsProps {
  newAppointment: AppointmentType;
  appointments: Array<AppointmentType>;
}

const UpcomingAppointments: FC<UpcomingAppointmentsProps> = (props) => {
  const [appointments, setAppointments] = useState<Array<AppointmentType>>(
    props.appointments
  );

  useEffect(() => {
    setAppointments((prevAppointments) =>
      prevAppointments?.concat(props.newAppointment)
    );
  }, [props.newAppointment]);

  return (
    <Card className={classes.container}>
      <h4>Upcoming appointments</h4>
      {appointments ? (
        appointments
          .sort(
            (a, b) =>
              new Date(a.scheduled).getTime() - new Date(b.scheduled).getTime()
          )
          .map((appointment) =>
            appointment ? (
              <UpcomingAppointmentItem
                key={appointment.id}
                appointment={appointment}
              />
            ) : null
          )
      ) : (
        <CircularProgress className={classes.loading} color="primary" />
      )}
    </Card>
  );
};

export default UpcomingAppointments;