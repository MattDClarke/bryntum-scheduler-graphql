import { builder } from "../builder";

builder.prismaObject("Events", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    startDate: t.string({
      resolve: (event) => new Date(event.startDate).toISOString(),
    }),
    endDate: t.string({
      resolve: (event) => new Date(event.endDate).toISOString(),
    }),
    resourceId: t.exposeString("resourceId", { nullable: true }),
    resizable: t.exposeBoolean("resizable"),
    draggable: t.exposeBoolean("draggable"),
    cls: t.exposeString("cls"),
    duration: t.exposeFloat("duration"),
    durationUnit: t.exposeString("durationUnit"),
    parentIndex: t.exposeInt("parentIndex"),
    orderedParentIndex: t.exposeInt("orderedParentIndex", { nullable: true }),
    exceptionDates: t.exposeString("exceptionDates", { nullable: true }),
    readOnly: t.exposeBoolean("readOnly"),
    allDay: t.exposeBoolean("allDay"),
    recurrenceCombo: t.exposeString("recurrenceCombo"),
  }),
});

builder.queryField("events", (t) =>
  t.prismaField({
    type: ["Events"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.events.findMany({ ...query }),
  })
);

builder.mutationField("createEvent", (t) =>
  t.prismaField({
    type: "Events",
    args: {
      id: t.arg.string({ required: true }),
      name: t.arg.string({ required: true }),
      startDate: t.arg.string({ required: true }),
      endDate: t.arg.string({ required: true }),
      resourceId: t.arg.string({ required: true }),
      resizable: t.arg.boolean({ required: true }),
      draggable: t.arg.boolean({ required: true }),
      cls: t.arg.string({ required: true }),
      duration: t.arg.float({ required: true }),
      durationUnit: t.arg.string({ required: true }),
      parentIndex: t.arg.int({ required: true }),
      orderedParentIndex: t.arg.int({ required: false }),
      exceptionDates: t.arg.string({ required: false }),
      readOnly: t.arg.boolean({ required: false }),
      allDay: t.arg.boolean({ required: true }),
      recurrenceCombo: t.arg.string({ required: false }),
    },
    resolve: async (query, _parent, args, ctx) => {
      return prisma.events.create({
        // the `query` argument will add in `include`s or `select`s to
        // resolve as much of the request in a single query as possible
        ...query,
        data: {
          ...args,
        },
      });
    },
  })
);

builder.mutationField("deleteEvent", (t) =>
  t.prismaField({
    type: "Events",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;
      return prisma.events.delete({
        ...query,
        where: { id },
      });
    },
  })
);

// builder.mutationField("deleteResourceEvents", (t) =>
//   t.prismaField({
//     type: "Events",
//     args: {
//       id: t.arg.string({ required: true }),
//     },
//     resolve: async (query, _parent, args, ctx) => {
//       const { id } = args;

//       return prisma.events.deleteMany({
//         // ...query,
//         where: { resourceId: id },
//       });
//     },
//   })
// );

builder.mutationField("updateEvent", (t) =>
  t.prismaField({
    type: "Events",
    args: {
      id: t.arg.string({ required: true }),
      name: t.arg.string({ required: false }),
      startDate: t.arg.string({ required: false }),
      endDate: t.arg.string({ required: false }),
      resourceId: t.arg.string({ required: false }),
      resizable: t.arg.boolean({ required: false }),
      draggable: t.arg.boolean({ required: false }),
      cls: t.arg.string({ required: false }),
      duration: t.arg.float({ required: false }),
      durationUnit: t.arg.string({ required: false }),
      parentIndex: t.arg.int({ required: false }),
      orderedParentIndex: t.arg.int({ required: false }),
      exceptionDates: t.arg.string({ required: false }),
      readOnly: t.arg.boolean({ required: false }),
      allDay: t.arg.boolean({ required: false }),
      recurrenceCombo: t.arg.string({ required: false }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id, ...modifiedVariables } = args;

      return prisma.events.update({
        // the `query` argument will add in `include`s or `select`s to
        // resolve as much of the request in a single query as possible
        ...query,
        where: { id },
        data: { ...modifiedVariables },
      });
    },
  })
);
