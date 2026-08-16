import { Resend } from "resend";

// Lazily instantiate Resend to avoid build-time errors when RESEND_API_KEY is not set yet
export const getResendClient = () => {
  return new Resend(process.env.RESEND_API_KEY || "re_dummy_for_build");
};

export const CONTACT_EMAIL = "hello@malikagencies.com";
