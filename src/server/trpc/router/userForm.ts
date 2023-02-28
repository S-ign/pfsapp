import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const userFormRouter = router({
  postGMI: publicProcedure.input(z.object({
    Salary: z.object({
      create: z.object({
        key: z.string(),
        Name: z.string(),
        Date: z.string(),
        Amount: z.string(),
        Notes: z.string(),
      })
    }),
    RealEstateRentals: z.object({
      create: z.object({
        key: z.string(),
        Name: z.string(),
        Date: z.string(),
        Amount: z.string(),
        Notes: z.string(),
      })
    }),
    Business: z.object({
      create: z.object({
        key: z.string(),
        Name: z.string(),
        Date: z.string(),
        Amount: z.string(),
        Notes: z.string(),
      })
    }),
    DividendStocks: z.object({
      create: z.object({
        key: z.string(),
        Name: z.string(),
        Date: z.string(),
        Amount: z.string(),
        Notes: z.string(),
      })
    }),
    Other: z.object({
      create: z.object({
        key: z.string(),
        Name: z.string(),
        Date: z.string(),
        Amount: z.string(),
        Notes: z.string(),
      })
    }),
  })).mutation( async ({ input, ctx }) => {
        
    const r = await ctx.prisma.grossMonthlyIncome.upsert({
      create: {
        ...input,
        userId: ctx.session.user.id
      },
      update: {
        ...input,
        userId: ctx.session.user.id
      },
      where: {
        userId: ctx.session.user.id
      }
    })
    return r
  }),


});

