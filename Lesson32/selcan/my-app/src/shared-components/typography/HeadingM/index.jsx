import './styles.css';

export const HeadingM = ({title, headM}) => {

  return (
    <h3 className={headM ? 'headM' : ''}>{title}</h3>
  );
}