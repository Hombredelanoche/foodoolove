import Card from "@/components/userInterfaces/Card";
import Link from "next/link";
import React from "react";

const DefaultNotifications = () => {
  return (
    <>
      <Card>
        <div>Default Notifications</div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </>
  );
};

export default DefaultNotifications;
