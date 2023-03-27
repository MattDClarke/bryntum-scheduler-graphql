// NOT USED???

import prisma from "../utils/prisma";

export const resolvers = {
  Query: {
    resources: () => {
      return prisma.resources.findMany();
    },
    events: () => {
      return prisma.events.findMany();
    },
  },
};
