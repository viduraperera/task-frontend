import CustomInputField from "@/common/customer-inputs/CustomInputField";
import CustomTextareaField from "@/common/customer-inputs/CustomTextareaField";
import ModalPopup from "@/common/ModalPopup";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the structure of form inputs
type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
};

// Initialize the form inputs
const initialState: FormInputs = {
  firstName: "",
  lastName: "",
  email: "",
  comment: "",
};

// Define the validation schema using Zod
const zodSchema = z.object({
  firstName: z
    .string()
    .regex(/^[a-zA-Z ]*$/)
    .nonempty("Please enter first name"),
  lastName: z
    .string({ required_error: "Please enter last name" })
    .regex(/^[a-zA-Z ]*$/)
    .nonempty("Please enter last name"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  comment: z.string().nonempty("Please enter a comment"),
});

export default function ContactUs({ values }: { values?: FormInputs }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    defaultValues: values || initialState,
    resolver: zodResolver(zodSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    // Log form data to console
    console.log(data);
    setTimeout(() => {
      reset();
      setShowPopup(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleClose = () => setShowPopup(false);

  return (
    <div className="col-md-7 col-lg-8" style={{ marginBottom: "200px" }}>
      <h4 className="mb-3">Contact Us</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
        noValidate
      >
        <div className="row g-3">
          <CustomInputField
            id="firstName"
            label="First name"
            register={register("firstName")}
            error={errors.firstName?.message}
          />
          <CustomInputField
            id="lastName"
            label="Last name"
            register={register("lastName")}
            error={errors.lastName?.message}
          />
          <CustomInputField
            id="email"
            label="Email"
            type="email"
            register={register("email")}
            error={errors.email?.message}
          />
          <CustomTextareaField
            id="comment"
            label="Comment"
            register={register("comment")}
            error={errors.comment?.message}
          />
        </div>

        <hr className="my-4" />

        <Button
          className="w-100 booking-button "
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ color: "black" }}
            />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
      <ModalPopup
        show={showPopup}
        handleClose={handleClose}
        title="Form Submitted"
        body="Your form has been successfully submitted!"
      />
    </div>
  );
}
