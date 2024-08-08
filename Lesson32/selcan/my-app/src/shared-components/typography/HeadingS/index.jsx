import './styles.css';

export const HeadingS = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
  );
}