import Link from 'next/link'  

const people = [
  {
    vehicle: 'Car',
    person: 'Ramzi'
  },
  {
    vehicle: 'bike',
    person: 'mohsen'
  },
  {
    vehicle: 'Jet',
    person: 'Ali'
  }
]
export default function about() {
  console.log(people)
  return (
    <div>
      Tesing
        <ul>
          {people.map( p => (
            <li key={p.person}>
              <Link href='[vehicle]/[person]' as={`/${p.vehicle}/${p.person}`}>
                <a> Navigating to {p.person}'s {p.vehicle}</a>
              </Link>
            </li>
          ))
          }
        </ul>
  
      
    </div>
  )
}
