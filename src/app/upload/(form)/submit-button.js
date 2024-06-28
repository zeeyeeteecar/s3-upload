"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      className="w-[300px] h-[60px] bg-slate-50 rounded-full border-2 text-slate-600"
      aria-disabled={pending}
    >
      Upload File {pending && "ing..."}
    </button>
  );
}
