import { Formik, Form, Field } from "formik";

interface MyFormValues {
  subject: string;
  message: string;
}

const Contact = () => {
  const initialValues: MyFormValues = { subject: "", message: "" };

  return (
    <div className="contact-section flex flex-col md:m-20 m-12 md:gap-10 gap-16 items-center">
      <h3 className="md:text-8xl text-7xl font-thin tracking-wide text-center">
        Contact Us
      </h3>
      <h4 className="italic text-2xl">
        For questions or additional information about the Off the Dock Chamber
        Festival, fill out the form below
      </h4>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            const { subject, message } = values;
            window.location.href = `mailto:${"offthedockchamber@gmail.com"}?subject=${
              subject || ""
            }&body=${message || ""}`;
            actions.setSubmitting(false);
          }}
        >
          <Form className="md:w-240 w-full m-auto flex flex-col gap-10 text-[#353535] text-2xl">
            <Field
              id="subject"
              name="subject"
              placeholder="Subject"
              className="p-4 rounded-md border outline-none"
            />
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Message"
              className="p-4 rounded-md border outline-none resize-none h-96"
            />
            <button
              type="submit"
              className="bg-[#A0937D] hover:bg-[#988a72] text-white p-6 tracking-wide rounded-md"
            >
              SEND MESSAGE
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
