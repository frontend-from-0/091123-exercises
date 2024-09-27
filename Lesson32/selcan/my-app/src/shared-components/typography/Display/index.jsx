import './styles.css';

 lesson32--selcan
export const Display = ({title,dis}) => {

  return (
    <h1 className={dis? 'dis' : ''}>{title}</h1>
=======
export const Display = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
 main
  );
}