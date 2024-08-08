import './styles.css';

export const BodyM = ({title, bold}) => {

  return (
    <p className={bold ? 'bold' : ''}>{title}</p>
  );
}