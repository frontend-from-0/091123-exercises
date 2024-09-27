import './styles.css';

 lesson32--selcan
export const HeadingM = ({title, headM}) => {

  return (
    <h3 className={headM ? 'headM' : ''}>{title}</h3>
=======
export const HeadingM = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
 main
  );
}