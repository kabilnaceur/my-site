import styles from "./contactMe.module.scss";
import { profile } from "../../../../assets/images";
import { TfiLinkedin } from "react-icons/tfi";
import { FaStackOverflow } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Button from "../../../../components/Button/Button";
import { FC, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type ContactFormType = {
  email: string;
  message: string;
};

export interface contactMeProps {
  scrollableContactRef: any;
}

const ContactMe: FC<contactMeProps> = ({ scrollableContactRef }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("S'il vous plaît, mettez une adresse email valide")
      .required("Veuillez saisir votre adresse e-mail"),
    message: yup.string().required("Veuillez entrer un message"),
  });
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ContactFormType>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ContactFormType) => {
    emailjs
      .sendForm(
        "service_olancur",
        "template_o0qpq12",
        formRef.current as HTMLFormElement,
        "8LXM97HXcwGN-tL9l"
      )
      .then(
        () => {
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.container} ref={scrollableContactRef}>
      <div className={styles.contactContainer} data-aos="fade-left">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          {errors.email ? (
            <div className="error-div">
              <p>{errors?.email.message}</p>
            </div>
          ) : errors.message ? (
            <div className="error-div">
              <p>{errors.message.message}</p>
            </div>
          ) : null}
          <input
            {...register("email")}
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <input
            {...register("message")}
            placeholder="Your meassage"
            name="message"
          />
          <Button
            content={"Send message"}
            color={"#6752ea"}
            backgroundColor={"#f4f3f8"}
          />
        </form>
      </div>
      <div style={{ width: "100%" }} data-aos="fade-right">
        <h2>Are you interested?</h2>
        <h2>Say hi!</h2>
        <div className={styles.imageContainer}>
          <img alt="Kabil photo" src={profile} />
          <div className={styles.information}>
            <h3>Kabil Naceur</h3>
            <h4>Front-end developer</h4>
            <div className={`${styles.contact} `}>
              <TfiLinkedin className={styles.icon} />{" "}
              <SiGithub className={styles.icon} />{" "}
              <FaStackOverflow className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <a>About me</a>
          <a>Projects</a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
