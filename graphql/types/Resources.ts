import { builder } from "../builder";

builder.prismaObject("Resources", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    parentIndex: t.exposeInt("parentIndex"),
  }),
});

builder.queryField("resources", (t) =>
  t.prismaField({
    type: ["Resources"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.resources.findMany({ ...query }),
  })
);

builder.mutationField("createResource", (t) =>
  t.prismaField({
    type: "Resources",
    args: {
      id: t.arg.string({ required: true }),
      name: t.arg.string({ required: true }),
      parentIndex: t.arg.int({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id, name, parentIndex } = args;

      return prisma.resources.create({
        // the `query` argument will add in `include`s or `select`s to
        // resolve as much of the request in a single query as possible
        ...query,
        data: {
          id,
          name,
          parentIndex,
        },
      });
    },
  })
);

builder.mutationField("deleteResource", (t) =>
  t.prismaField({
    type: "Resources",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;

      const deleteResource = await prisma.resources.delete({
        ...query,
        where: { id: id },
      });
      return deleteResource;
    },
  })
);

builder.mutationField("updateResource", (t) =>
  t.prismaField({
    type: "Resources",
    args: {
      id: t.arg.string({ required: true }),
      name: t.arg.string({ required: false }),
      parentIndex: t.arg.int({ required: false }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id, ...modifiedVariables } = args;

      return prisma.resources.update({
        // the `query` argument will add in `include`s or `select`s to
        // resolve as much of the request in a single query as possible
        ...query,
        where: { id },
        data: { ...modifiedVariables },
      });
    },
  })
);
