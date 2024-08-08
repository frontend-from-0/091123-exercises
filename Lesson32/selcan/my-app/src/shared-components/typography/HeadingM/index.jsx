import './styles.css';

export const HeadingM = ({title, bold}) => {

  return (
    <h3 className={bold ? 'bold' : ''}>{title}</h3>
  );
}