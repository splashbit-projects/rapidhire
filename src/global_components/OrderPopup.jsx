"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import ButtonArrow from "@/icons/ButtonArrow";

function OrderPopup() {
  const {
    orderPopupDisplay,
    setOrderPopupDisplay,
    serviceValue,
    popupTitle,
    popupSubtitle,
  } = usePopup();
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required!"),
    phone: Yup.string().required("This field is required!"),
  });

  const initialValues = {
    name: "",
    email: "",
    additional: "",
    service: `${serviceValue} Request`,
  };

  const closePopup = (resetForm) => {
    setOrderPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    const valuesWithService = {
      ...values,
      service: serviceValue,
    };

    try {
      const response = await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valuesWithService),
      });

      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div className={`request-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
        }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              <img
                src="/images/closePopup.svg"
                className="popup-close"
                alt="popup-close"
                onClick={() => closePopup(resetForm)}
              />
              <div>
                <div className="request-form">
                  <Form>
                    {status && status.success ? (
                      <div className="thanks-message full">
                        <img src="/images/success.svg" />
                        <span>
                          Thank you for choosing Rapid HR Connect!
                          <br />
                          Our representative will reach out to you shortly.
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="full">
                          <h3>{popupTitle}</h3>
                          <h2 className="service-title">{serviceValue}</h2>
                          <p
                            dangerouslySetInnerHTML={{ __html: popupSubtitle }}
                          />
                        </div>
                        <div>
                          <Field
                            name="name"
                            type="text"
                            placeholder="Full Name*"
                            className={
                              touched.name && errors.name ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="email"
                            type="email"
                            placeholder="Email Address*"
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="full">
                          <PhoneInput
                            country={countryCode}
                            value=""
                            onChange={(value) => setFieldValue("phone", value)}
                            placeholder="Phone Number*"
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage name="phone" component="span" />
                        </div>

                        <div className="full">
                          <Field
                            name="additional"
                            as="textarea"
                            placeholder="Your Message"
                            className={
                              touched.additional && errors.additional
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="additional"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="main-button"
                          disabled={isSubmitting}
                        >
                          <span>Send</span>
                          <ButtonArrow />
                        </button>
                      </>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default OrderPopup;
