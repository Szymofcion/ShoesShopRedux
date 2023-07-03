import "./ContactForm.scss";
const ContactForm = () => {
  return (
    <form className="contact">
      <div className="contact__form-top">
        <label className="contact__form-label" for="name">
          Imie i nazwisko:
        </label>
        <input className="contact__form-input" type="text" id="name"></input>
        <label className="contact__form-label" for="email">
          Adres e-mail:
        </label>
        <input className="contact__form-input" type="text" id="email"></input>
      </div>
      <div className="contact__form-bottom">
        <label className="contact__form-label" for="msg">
          Wiadomość
        </label>
        <textarea className="contact__form-textarea" id="msg"></textarea>
        <button className="contact__form-btn" type="submit">
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
