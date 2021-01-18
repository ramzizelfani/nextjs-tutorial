import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
export default function User({ defaultPerson }) {
  const { query } = useRouter();
  const { users, company, user } = query;
  const [person, setPerson] = useState(defaultPerson);
  useEffect(() => {
    async function getPerson() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user}`
      );
      const userObject = await response.json();
      setPerson(userObject);
    }
    //if (defaultPerson.name === 'Mohsen') return;
    getPerson();
  }, []);
  return (
    <div>
      <div>
        {person.name} is working in {person.company.name}
        <pre>{JSON.stringify(person, null, 4)}</pre>
      </div>
      <Link href='/users/'>Back to Users</Link>
    </div>
  );
}
User.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return {
      defaultPerson: {
        name: 'Mohsen',
        company: {
          name: 'Mohsen Company',
        },
      },
    };
  }
  const { query } = ctx;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.user}`
  );
  const defaultPerson = await response.json();
  return { defaultPerson };
};
