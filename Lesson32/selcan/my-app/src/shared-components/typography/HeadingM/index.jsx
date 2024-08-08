import './styles.css';

export const HeadingM = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
  );
}