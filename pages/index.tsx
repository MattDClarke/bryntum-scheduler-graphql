import { useRef, LegacyRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { BryntumScheduler } from "@bryntum/scheduler-react";

const SchedulerDynamic = dynamic(() => import("@/components/Scheduler"), {
  ssr: false,
  loading: () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  },
});

export default function Home() {
  const schedulerRef = useRef() as LegacyRef<BryntumScheduler> | undefined;

  return (
    <>
      <Head>
        <title>Bryntum Scheduler using Next.js</title>
        <meta name="description" content="Bryntum Scheduler using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="scheduler-container">
        <SchedulerDynamic schedulerRef={schedulerRef} />
      </div>
    </>
  );
}
