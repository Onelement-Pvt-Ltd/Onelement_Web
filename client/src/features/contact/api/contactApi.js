import { API_BASE_URL } from "@/shared/config/api";

export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.message || "We could not send your message. Please try again.");
  }

  return payload;
};
