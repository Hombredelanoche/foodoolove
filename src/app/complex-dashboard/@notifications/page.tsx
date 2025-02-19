import Card from "@/components/userInterfaces/Card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <>
      <Card>
        <div>Notifications</div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </>
  );
};

export default Notifications;
