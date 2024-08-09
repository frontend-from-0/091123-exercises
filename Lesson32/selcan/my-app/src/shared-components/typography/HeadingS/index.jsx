import './styles.css';

export const HeadingS = ({title, headS}) => {

  return (
    <h4 className={headS ? 'headS' : ''}>{title}</h4>
  );
}