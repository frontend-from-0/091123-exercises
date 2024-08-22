import './styles.css';

export const BodyM = ({body, regular}) => {

    return (
      <p className={regular ? 'regular' : ''}>{body}</p>
    );
  }