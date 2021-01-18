import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Person() {
  const { query } = useRouter();
  const {person, vehicle } = query
  return (
    <div>
      <p> This is {person}'s {vehicle} </p>
      <Link href='/'>Back to Home</Link>

    </div>
  )
}
