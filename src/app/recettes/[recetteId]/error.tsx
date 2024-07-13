"use client";

import Button from "@/components/userInterfaces/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div> {error.message} </div>
      <Button onClick={reset}>Refresh</Button>
    </>
  );
}
