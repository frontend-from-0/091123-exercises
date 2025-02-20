import './styles.css';

export const BodyS = ({body, regular}) => {

    return (
      <p className={`body-s ${regular ? 'regular' : ''}`}>
        {body}
      </p>
    );
  }