import './styles.css';

export const Display = ({title,dis}) => {

  return (
    <h1 className={dis? 'dis' : ''}>{title}</h1>
  );
}