import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TripCreateArgs>({
  trip: {
    one: { data: { title: 'String' } },
    two: { data: { title: 'String' } },
  },
})

export type StandardScenario = typeof standard
