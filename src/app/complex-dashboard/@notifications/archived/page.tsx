import Card from "@/components/userInterfaces/Card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <>
      <Card className="flex flex-col w-full">
        <div>Archived Notifications</div>
        <Link href="/complex-dashboard">Default</Link>
      </Card>
    </>
  );
};

export default ArchivedNotifications;
