import ModalPopup from "@/common/ModalPopup";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
};

const initialState: FormInputs = {
  firstName: "",
  lastName: "",
  email: "",
  comment: "",
};

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

export default function Bookings({ values }: { values?: FormInputs }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    console.log(data);
    setTimeout(() => {
      reset();
      setShowPopup(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleClose = () => setShowPopup(false);

  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Contact Us</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
        noValidate
      >
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              id="firstName"
              {...register("firstName")}
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              id="lastName"
              {...register("lastName")}
            />
            <div className="invalid-feedback">{errors.lastName?.message}</div>
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              {...register("email")}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="col-12">
            <label htmlFor="comment" className="form-label">
              Comment
            </label>
            <textarea
              className={`form-control ${errors.comment ? "is-invalid" : ""}`}
              id="comment"
              style={{ height: "100px" }}
              {...register("comment")}
            ></textarea>
            <div className="invalid-feedback">{errors.comment?.message}</div>
          </div>
        </div>

        <hr className="my-4" />

        <Button
          className="w-100 btn btn-primary btn-lg"
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
