import Form from "./Form";
import styles from "../styles";

const ContactForm = () => {
  return (
    <div
      className="bg-primary flex flex-col items-center justify-center"
      id="contact"
    >
      <h2
        className={`${styles.heading2} pb-7 text-center leading-tight`}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-once="true"
      >
        Have a cool idea? Let's make it happen.
      </h2>
      <Form />
    </div>
  );
};
export default ContactForm;
