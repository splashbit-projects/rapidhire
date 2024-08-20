"use client";
import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";

function OrderPopup() {
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue } = usePopup();
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("The field is required."),
    lastName: Yup.string().required("The field is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("The field is required."),
    phone: Yup.string().required("The field is required."),
    company: Yup.string().required("The field is required."),
    website: Yup.string().required("The field is required."),
    message: Yup.string().required("The field is required."),
    budget: Yup.string().required("The field is required."),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
    budget: "",
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
      service: `${serviceValue} Request`,
    };

    console.log("Form values being submitted: ", valuesWithService);

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
                  {status && status.success ? (
                    <div className="success-message">
                      <h2>Thank you!</h2>
                      <span>
                        Your request has been successfully received. Our team
                        will review your information and contact you shortly to
                        discuss your marketing challenges and the solutions we
                        can provide.
                      </span>
                    </div>
                  ) : (
                    <>
                      <h2 className="service-title">{serviceValue} Request</h2>

                      <Form>
                        <Field
                          type="hidden"
                          name="service"
                          value={`${serviceValue} Request`}
                        />
                        <div>
                          <Field
                            name="firstName"
                            type="text"
                            placeholder="First name"
                            className={
                              touched.firstName && errors.firstName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="lastName"
                            type="text"
                            placeholder="Last name"
                            className={
                              touched.lastName && errors.lastName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="email"
                            type="email"
                            placeholder="Email"
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

                        <div>
                          <PhoneInput
                            country={countryCode}
                            value=""
                            onChange={(value) => setFieldValue("phone", value)}
                            placeholder="Your phone"
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage name="phone" component="span" />
                        </div>

                        <div>
                          <Field
                            name="company"
                            type="text"
                            placeholder="Company name"
                            className={
                              touched.company && errors.company ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="company"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="website"
                            type="text"
                            placeholder="Company website"
                            className={
                              touched.website && errors.website ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="website"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="budget"
                            type="text"
                            placeholder="Budget"
                            className={
                              touched.budget && errors.budget ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="budget"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="message"
                            type="text"
                            placeholder="Message"
                            className={
                              touched.message && errors.message ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="orange-button"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </Form>
                    </>
                  )}
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
