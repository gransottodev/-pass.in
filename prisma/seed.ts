import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data:{
      id: '7a4a7174-af48-4ad6-8814-2f4487124c8b',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('Database seeded 🌱')
  prisma.$disconnect()
})