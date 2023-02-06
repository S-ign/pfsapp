import { z } from "zod";

import useBoundStore from '../../../slices/FormSlices'

import { router, publicProcedure } from "../trpc";

export const userFormRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  postGMI: publicProcedure.query(({ ctx }) => {
    const salary = useBoundStore((state) => state.Salary)
    const realEstateRentals = useBoundStore((state) => state.RealEstateRentals)
    const business = useBoundStore((state) => state.Business)
    const dividendStocks = useBoundStore((state) => state.DividendStocks)
    const other = useBoundStore((state) => state.Other)
    ctx.prisma.user.update({
      where: {
        email: "",
      },
      data: {

        gmi: {
          create: {

            salaries: {
              create: {
                name: salary.Name,
                notes: salary.Notes,
                amount: salary.Amount
              },
            },

            realEstateRentals: {
              create: {
                name: realEstateRentals.Name,
                notes: realEstateRentals.Notes,
                amount: realEstateRentals.Amount
              },
            },

            businesses: {
              create: {
                name: business.Name,
                notes: business.Notes,
                amount: business.Amount
              },
            },

            dividendStocks: {
              create: {
                name: dividendStocks.Name,
                notes: dividendStocks.Notes,
                amount: dividendStocks.Amount
              },
            },

            others: {
              create: {
                name: other.Name,
                notes: other.Notes,
                amount: other.Amount
              },
            },

          },
        }
      }
    })
  }),
});

