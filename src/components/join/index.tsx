import { FC } from 'react';
import JoinForm from './JoinForm';
import { containerStyles } from './style';

const Join: FC<{}> = () => {
  return (
    <div className={containerStyles}>
      <JoinForm />
    </div>
  );
};

export default Join;
