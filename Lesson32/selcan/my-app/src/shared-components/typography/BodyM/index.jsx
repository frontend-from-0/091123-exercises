import './styles.css';

export const BodyM = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
  );
}