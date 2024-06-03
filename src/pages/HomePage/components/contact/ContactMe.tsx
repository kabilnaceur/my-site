import styles from "./contactMe.module.scss";
import { profile } from "../../../../assets/images";
import { TfiLinkedin } from "react-icons/tfi";
import { FaStackOverflow } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Button from "../../../../components/Button/Button";
import { FC, useRef, useState } from "react";
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
  handleClickToAbout: () => void;
  handleClickToProjects: () => void;
}

const ContactMe: FC<contactMeProps> = ({
  scrollableContactRef,
  handleClickToAbout,
  handleClickToProjects,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState<Boolean>(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email address")
      .required("Please enter your email address"),
    message: yup.string().required("Please enter a message"),
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
          setSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage(false);
        }
      );
  };
  return (
    <div className={styles.container} ref={scrollableContactRef}>
      <div className={styles.contactContainer} data-aos="fade-left">
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex-column"
        >
          {errors.email ? (
            <div className="error-div">
              <p>{errors?.email.message}</p>
            </div>
          ) : errors.message ? (
            <div className="error-div">
              <p>{errors.message.message}</p>
            </div>
          ) : successMessage ? (
            <div className="success-div">
              <p>Your message has been sent successfully!</p>
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
              <a href="https://www.linkedin.com/in/kabil-naceur-7b3a921a9/">
                <TfiLinkedin className={styles.icon} />
              </a>
              <a href="https://github.com/kabilnaceur">
                <SiGithub className={styles.icon} />{" "}
              </a>
              <a href="https://stackoverflow.com/users/20712322/kabil-naceur">
                <FaStackOverflow className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <button onClick={handleClickToAbout}>About me</button>
          <button onClick={handleClickToProjects}>Projects</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
