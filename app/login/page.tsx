import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <LoginForm />
      </div>
      <Footer />
    </main>
  )
}
