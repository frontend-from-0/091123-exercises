import './styles.css';

export const BodyS = ({title,mid}) => {

  return (
    <p className={mid ? 'mid' : ''}>{title}</p>
  );
}