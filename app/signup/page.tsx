import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SignupForm from "@/components/signup-form"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <SignupForm />
      </div>
      <Footer />
    </main>
  )
}
