import Link from 'next/link';
export default function people() {
  const people = [
    {
      vehicle: 'Car',
      owner: 'Ramzi',
    },
    {
      vehicle: 'Jet',
      owner: 'Ali',
    },
    {
      vehicle: 'Bike',
      owner: 'Houcem',
    },
    {
      vehicle: 'Boat',
      owner: 'Abdallah',
    },
  ];
  return (
    <div>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.owner}>
              <Link href={`/${person.vehicle}/${person.owner}`}>
                <a>
                  Navigate to {person.owner}'s {person.vehicle}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href='/'>
        <a> Back to Home </a>
      </Link>
    </div>
  );
}
