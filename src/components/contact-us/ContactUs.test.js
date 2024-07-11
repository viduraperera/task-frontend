import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "./ContactUs";

describe("ContactUs Form", () => {
  test("renders the form with all input fields", () => {
    render(<ContactUs />);

    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Comment/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("validates and submits the form", async () => {
    render(<ContactUs />);

    const firstNameInput = screen.getByLabelText(/First name/i);
    const lastNameInput = screen.getByLabelText(/Last name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const commentInput = screen.getByLabelText(/Comment/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    // Fill out the form
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(commentInput, { target: { value: "This is a comment." } });

    // Submit the form
    fireEvent.click(submitButton);

    // Wait for the submission to be processed
    await waitFor(() => expect(submitButton).toBeDisabled());

    // Check if the form data is logged to the console
    expect(console.log).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      comment: "This is a comment.",
    });

    // Check if the modal popup is shown
    expect(
      await screen.findByText(/Your form has been successfully submitted!/i)
    ).toBeInTheDocument();
  });

  test("displays validation errors for empty fields", async () => {
    render(<ContactUs />);

    const submitButton = screen.getByRole("button", { name: /Submit/i });

    // Submit the form without filling out any fields
    fireEvent.click(submitButton);

    // Check for validation error messages
    expect(
      await screen.findByText(/Please enter first name/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please enter last name/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please enter a valid email address/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please enter a comment/i)
    ).toBeInTheDocument();
  });
});
