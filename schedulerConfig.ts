import type { BryntumSchedulerProps } from "@bryntum/scheduler-react";

const schedulerConfig: BryntumSchedulerProps = {
  columns: [{ text: "name", field: "name", width: 250 }],
  viewPreset: "weekAndDayLetter",
  barMargin: 10,
};

export { schedulerConfig };
