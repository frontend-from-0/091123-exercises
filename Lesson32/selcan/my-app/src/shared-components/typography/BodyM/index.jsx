import './styles.css';

export const BodyM = ({title,mid}) => {

  return (
    <p className={mid ? 'mid' : ''}>{title}</p>
  );
}