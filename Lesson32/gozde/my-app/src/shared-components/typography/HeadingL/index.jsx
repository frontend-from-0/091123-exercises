import './styles.css';

export const HeadingL = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
  );
}

export const HeadingM = ({title, bold}) => {

  return (
    <h3 className={bold ? 'bold' : ''}>{title}</h3>
  );
}

export const Display = ({title, bold}) => {

  return (
    <h1 className={bold ? 'bold' : ''}>{title}</h1>
  );
}

export const HeadingS = ({title, bold}) => {

  return (
    <h4 className={bold ? 'bold' : ''}>{title}</h4>
  );
}
  
export const BodyM = ({body, regular}) => {

  return (
    <p className={regular ? 'regular' : ''}>{body}</p>
  );
}

export const BodyS = ({body, regular}) => {

  return (
    <div className={regular ? 'regular' : ''}>{body}</div>
  );
}