import {useRouter} from 'next/router'
export default function Person() {
  const router = useRouter()
  console.log(router)
  const {vehicle, person} = router.query 
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s[0].toUpperCase() + s.slice(1)
  }
  return (
    <div>
      This is {capitalize(person)}'s {vehicle}
    </div>
  )
}
