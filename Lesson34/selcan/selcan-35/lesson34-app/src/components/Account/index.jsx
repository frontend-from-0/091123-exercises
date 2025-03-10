import React from "react";
import LoginForm from "../LoginForm";
import { useUser } from "../../userContext";
import "./styles.css";

const Account = () => {
  const user = useUser();
  const isLoggedIn = user.isLoggedIn;

  return (
    <main className="account-container" aria-live="polite">
      <div role="region" aria-label="Hesap Yönetimi" id="login-form">
        {!isLoggedIn ? (
          <section aria-labelledby="login-section" className="login-section">
            <h1 id="login-section">Giriş Yap</h1>
            <LoginForm />
          </section>
        ) : (
          <section
            className="welcome-container"
            aria-labelledby="welcome-heading"
          >
            <h2 id="welcome-heading">Hoş Geldiniz!</h2>
            <p>Başarıyla giriş yaptınız.</p>
          </section>
        )}
      </div>
    </main>
  );
};

export default Account;
