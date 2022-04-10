import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/react-loader-spinner.cjs.development';
import s from './Spinner.module.css';

function Spinner() {
  return (
    <div className={s.overlay}>
      <BallTriangle type="ThreeDots" color="#f50057" height="35" />
    </div>
  );
}

export default Spinner;
