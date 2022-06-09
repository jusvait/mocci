import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PersonCreateArgs>({
  person: {
    one: { data: { name: 'String', trips: { create: { title: 'String' } } } },
    two: { data: { name: 'String', trips: { create: { title: 'String' } } } },
  },
})

export type StandardScenario = typeof standard
