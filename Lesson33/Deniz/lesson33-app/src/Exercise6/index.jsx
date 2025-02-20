export const Exercise6 = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Link was clicked, but the redirect was prevented.");
  };

  return (
    <div>
      <h1>Prevent Default Exemple</h1>
      <a href="https://bjk.com.tr/tr" onClick={handleClick}>
        Please click on this !
      </a>
    </div>
  );
};
