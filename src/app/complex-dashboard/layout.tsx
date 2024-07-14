import React from "react";

const ComplexDashboardLayout = ({
  children,
  userAnalytics,
  revenueMetrics,
  notifications,
}: {
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  revenueMetrics: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <>
      <div> {children} </div>
      <section className="flex">
        <article className="flex flex-col">
          <div>{userAnalytics}</div>
          <div>{revenueMetrics}</div>
        </article>
        <article className="flex-1">
          <div>{notifications}</div>
        </article>
      </section>
    </>
  );
};

export default ComplexDashboardLayout;
