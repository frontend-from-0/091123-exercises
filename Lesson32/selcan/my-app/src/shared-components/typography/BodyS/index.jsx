import './styles.css';

 lesson32--selcan
export const BodyS = ({title,mid}) => {

  return (
    <p className={mid ? 'mid' : ''}>{title}</p>
=======
export const BodyS = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
 main
  );
}