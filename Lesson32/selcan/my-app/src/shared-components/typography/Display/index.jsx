import "./styles.css";

export const Display = ({ title, bold }) => {
  return <h1 className={bold ? "bold" : ""}>{title}</h1>;
};
