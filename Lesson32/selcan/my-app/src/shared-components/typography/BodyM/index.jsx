import './styles.css';

 lesson32--selcan
export const BodyM = ({title,mid}) => {

  return (
    <p className={mid ? 'mid' : ''}>{title}</p>
=======
export const BodyM = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
 main
  );
}