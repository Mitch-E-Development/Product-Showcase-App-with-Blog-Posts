import React, { useState } from "react";
import Banner from "../components/contact/Banner";
import Form from "../components/contact/Form";
import Map from "../components/contact/Map";
import { submitForm } from "../services/messageService";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  // Example business address coordinates
  const businessLatitude = 37.7749;
  const businessLongitude = -122.4194;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      // Call the service function
      const response = await submitForm(name, email, subject, message);

      if (response.code === 200) {
        alert("Your message has been sent!");
        
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else if (response.code === 422) {
        setError(response.message);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.message ? error.message : error);
    }
  };

  return (
    <div className="">
      <Banner />
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        setSubject={setSubject}
        subject={subject}
        setMessage={setMessage}
        message={message}
        onSubmit={onFormSubmit}
        error={error}
      />
      <Map  latitude={businessLatitude} longitude={businessLongitude} />
    </div>
  );
};

export default Contact;
