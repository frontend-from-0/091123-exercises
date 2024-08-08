import './styles.css';

export const HeadingS = ({title, bold}) => {

  return (
    <h4 className={bold ? 'bold' : ''}>{title}</h4>
  );
}