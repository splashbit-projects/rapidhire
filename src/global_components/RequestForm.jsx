import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import ButtonArrow from "@/icons/ButtonArrow";
import { excludedCountries } from "@/utils/countries";
import ReCaptcha from "react-google-recaptcha";
import { useTranslations } from "next-intl";

const RequestForm = () => {
  const t = useTranslations("requestForm");

  const countryCode = useCountryCode();

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const onCaptchaChange = (value) => {
    setIsCaptchaVerified(!!value);
  };

  const serviceTypes = [
    { value: t("services.0", {fallback: "Retained HR Support"}), label: t("services.0", {fallback: "Retained HR Support"}) },
    { value: t("services.1", {fallback: "HR Project Management"}), label: t("services.1", {fallback: "HR Project Management"}) },
    { value: t("services.2", {fallback: "Flexible HR Consultancy"}), label: t("services.2", {fallback: "Flexible HR Consultancy"}) },
    { value: t("services.3", {fallback: "Recruitment Assistance"}), label: t("services.3", {fallback: "Recruitment Assistance"}) },
    { value: t("services.4", {fallback: "Training & Development"}), label: t("services.4", {fallback: "Training & Development"}) },
    { value: t("services.5", {fallback: "HR Documentation"}), label: t("services.5", {fallback: "HR Documentation"}) },
  ];

  const contactMethods = [
    { value: t("contactMethods.0", {fallback: "Email"}), label: t("contactMethods.0", {fallback: "Email"}) },
    { value: t("contactMethods.1", {fallback: "Phone"}), label: t("contactMethods.1", {fallback: "Phone"}) },
    { value: t("contactMethods.2", {fallback: "Other"}), label: t("contactMethods.2", {fallback: "Other"}) },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#0d0d0d",
      height: "50px",
      borderRadius: "10px",
      background: "#f5f5f5",
      border: state.isFocused ? "1px solid #c5c5c5" : "1px solid #c5c5c5",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 20px",
      boxShadow: "unset",
      "&:hover": {
        borderColor: "#c5c5c5",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "50px",
      margin: "0",
      padding: "0",
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      height: "50px",
      margin: "0",
      padding: "0",
      border: "none",
      color: "#0d0d0d",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#0d0d0d",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      "> span": {
        display: "none",
      },
      "> div": {
        padding: "0",
        width: "13px",
        height: "13px",
        backgroundImage: "url(/images/selectArrow.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      },
      "> div > svg": {
        display: "none",
      },
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#ffffff0d",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#fff" : "#fff",
      color: "#0d0d0d",
      "&:hover": {
        background: "#08AC34",
      },
    }),
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("errors.fieldRequired", {fallback: "This field is required!"})),
    email: Yup.string()
      .email(t("errors.invalidEmail", {fallback: "Invalid email address"}))
      .required(t("errors.fieldRequired", {fallback: "This field is required!"})),
    phone: Yup.string().required(t("errors.fieldRequired", {fallback: "This field is required!"})),
    serviceType: Yup.string().required(t("errors.fieldRequired", {fallback: "This field is required!"})),
    description: Yup.string(),
    goals: Yup.string(),
    method: Yup.string(),
    time: Yup.string(),
    additional: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
    goals: "",
    method: "",
    time: "",
    additional: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      console.log("Submitting form with values:", values); // Added logging
      const response = await fetch("/api/emails/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json(); // Await response.json() to log it

      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        console.error("Error submitting form:", response.statusText); // Added logging
        setStatus({ success: false });
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Added logging
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="request-form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, touched, errors, status }) => (
            <Form>
              <div>
                <Field
                  name="name"
                  type="text"
                  placeholder={t("fullName", {fallback: "Your Full Name"})}
                  className={touched.name && errors.name ? "invalid" : ""}
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder={t("emailAddress", {fallback: "Your Email Address"})}
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <PhoneInput
                  country={countryCode}
                  excludeCountries={excludedCountries}
                  value=""
                  onChange={(value) => setFieldValue("phone", value)}
                  placeholder={t("phoneNumber", {fallback: "Your Contact Number"})}
                  className={touched.phone && errors.phone ? "invalid" : ""}
                />
                <ErrorMessage name="phone" component="span" />
              </div>

              <div>
                <Select
                  name="serviceType"
                  options={serviceTypes}
                  styles={customStyles}
                  className={`form-field ${
                    touched.serviceType && errors.serviceType ? "invalid" : ""
                  }`}
                  onChange={(option) =>
                    setFieldValue("serviceType", option.value)
                  }
                  placeholder={t("serviceType", {fallback: "Service Type"})}
                />
                <ErrorMessage
                  name="serviceType"
                  component="div"
                  className="error"
                />
              </div>

              <div className="full">
                <Field
                  name="description"
                  as="textarea"
                  placeholder={t("description", {fallback: "Briefly Describe Your HR Needs or Issues"})}
                  className={
                    touched.description && errors.description ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error"
                />
              </div>

              <div className="full">
                <Field
                  name="goals"
                  as="textarea"
                  placeholder={t("goals", {fallback: "What Are Your Main HR Goals and Objectives?"})}
                  className={touched.goals && errors.goals ? "invalid" : ""}
                />
                <ErrorMessage name="goals" component="div" className="error" />
              </div>

              <div className="full">
                <Field
                  name="additional"
                  as="textarea"
                  placeholder={t("additional", {fallback: "Any Other Details or Specific Requirements You’d Like to Share"})}
                  className={
                    touched.additional && errors.additional ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="additional"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Select
                  name="method"
                  options={contactMethods}
                  styles={customStyles}
                  className={`form-field ${
                    touched.method && errors.method ? "invalid" : ""
                  }`}
                  onChange={(option) => setFieldValue("method", option.value)}
                  placeholder={t("method", {fallback: "Preferred Contact Method"})}
                />
                <ErrorMessage name="method" component="div" className="error" />
              </div>

              <div>
                <Field
                  name="time"
                  type="text"
                  placeholder={t("time", {fallback: "Preferred Contact Time"})}
                  className={touched.time && errors.time ? "invalid" : ""}
                />
                <ErrorMessage name="time" component="div" className="error" />
              </div>
              <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''} onChange={onCaptchaChange} />
              <button
                type="submit"
                className={`${isSubmitting ? "loading" : ""} main-button`}
                disabled={isSubmitting || !isCaptchaVerified}
              >
                <span>{t("send", {fallback: "Send"})}
                </span>
                <ButtonArrow />
              </button>

              {status && status.success ? (
                <div className="thanks-message full">
                  <img src="/images/success.svg" />
                  <span>
                    {t("thanks.0", {fallback: "Thank you for choosing Rapid HR Connect!"})}
                    <br />
                    {t("thanks.1", {fallback: "Our representative will reach out to you shortly."})}
                  </span>
                </div>
              ) : (
                ""
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RequestForm;
