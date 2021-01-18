import Link from 'next/link'
import {useRouter} from 'next/router'
// import {useState, useEffect} from 'react'
export default function User({user}) {
  const {query} = useRouter()
  const { users, company, user} = query
  const [person, setPerson] = useState({user})
  useEffect(() => {
    async function getPerson() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const userObject = await response.json()
      setPerson(userObject)
    }
    getPerson()
  }, [])
  return (
    <div>
      <div>
        {user.name} is working in {user.company.name}
        <pre>{JSON.stringify(user, null,4)}</pre>
      </div>
      <Link href='/users/'>Back to Users</Link>
    </div>
  )
}
User.getInitialProps = async (ctx) => {
  if(!ctx.req) {
    return {user: {
      name: 'Mohsen',
      company: {
        name: 'Mohsen Company'
      }
    }}
  }
  const {query} = ctx;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${query.user}`)
  const user = await response.json()
  return {user}
}