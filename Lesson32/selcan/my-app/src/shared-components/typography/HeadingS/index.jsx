 lesson32--selcan
export const HeadingS = ({title, headS}) => {

  return (
    <h4 className={headS ? 'headS' : ''}>{title}</h4>
=======
export const HeadingS = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
main
  );
}