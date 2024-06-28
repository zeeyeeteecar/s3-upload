"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="submit-button" aria-disabled={pending}>
      Upload File {pending && "ing..."}
    </button>
  );
}
