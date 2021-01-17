import Link from 'next/link'
export default function Home() {
  const people = [
    {
      vehicle: 'Car',
      owner: 'Ramzi'
    },
    {
      vehicle: 'Jet',
      owner: 'Ali'
    },
    {
      vehicle: 'Bike',
      owner: 'Houcem'
    },
    {
      vehicle: 'Boat',
      owner: 'Abdallah'
    },
  ]
  return (
    <div>
      Home
      <ul>
        {people.map( person => {
          return (
            <li key={person.owner}>
              <Link href={`/${person.vehicle}/${person.owner}`}>
                <a>
                  Navigate to {person.owner}'s {person.vehicle}
                </a>
              </Link>
            </li>
        )})
        }
        
      </ul>
    </div>
  )
}
