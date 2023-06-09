import { FC } from 'react';
import AddCircle from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';

import HealthRating from '../../HealthRating/HealthRating';

import { HealthRating as HealthRatingType } from '@/models/patient';

import classes from './HealthRatingChange.module.css';

interface HealthRatingChangeProps {
  newHealthRating: HealthRatingType;
  reduceHealthRating: () => void;
  increaseHealthRating: () => void;
}

const HealthRatingChange: FC<HealthRatingChangeProps> = (props) => {
  const reduceRatingHandler = () => {
    if (props.newHealthRating === 1) {
      return;
    }
    props.reduceHealthRating();
  };

  const increaseRatingHandler = () => {
    if (props.newHealthRating === 5) {
      return;
    }
    props.increaseHealthRating();
  };

  return (
    <div className={classes.container}>
      <RemoveCircle onClick={reduceRatingHandler} />
      <HealthRating healthRating={props.newHealthRating} />
      <AddCircle onClick={increaseRatingHandler} />
    </div>
  );
};

export default HealthRatingChange;
