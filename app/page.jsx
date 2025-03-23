import { RegistrationForm } from "./components/RegistrationForm";


export default function Home() {

  return (
    <main className="w-full h-[100vh] pt-18 bg-[url('/pottery-class.jpg')] bg-center bg-cover">
      <RegistrationForm />
    </main>
  );
}
