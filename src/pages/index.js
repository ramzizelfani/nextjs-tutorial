import Link from 'next/link'
const index = () => {

  return (
    <div>
      Home
      <div>
        <Link href='/users/'>Users' Page</Link>
      </div>
      <div>
        <Link href='/people/'>People's Page</Link>
      </div>
    </div>
  )
}

export default index