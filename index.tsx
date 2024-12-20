import { useSession, signIn, signOut } from "next-auth/react"
import MedicalTreatmentForm from "@/components/MedicalTreatmentForm"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        מחובר כ- {session.user?.email} <br />
        <Button onClick={() => signOut()}>התנתק</Button>
        <MedicalTreatmentForm />
      </>
    )
  }
  return (
    <>
      לא מחובר <br />
      <Button onClick={() => signIn()}>התחבר</Button>
    </>
  )
}

