// import {useState, useEffect} from 'react'
import Link from 'next/link';
export default function users({ users }) {
  // const [users, setUsers] = useState([])
  // const [error, setError] = useState('')

  // useEffect(function effectFunction() {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //         .then(response => response.json())
  //         .then( data  => {
  //             console.log(data)
  //             setUsers(data)
  //         });
  // }, []);

  return (
    <div>
      Testing
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.company.name}/${user.id}`}>
              <a>{user.username} Page</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href='/'>Back to Home</Link>
    </div>
  );
}
users.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return { users };
};
