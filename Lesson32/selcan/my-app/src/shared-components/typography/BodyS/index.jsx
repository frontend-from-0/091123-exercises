import './styles.css';

export const BodyS = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
  );
}