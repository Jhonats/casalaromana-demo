import { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "../components/Login/LoginForm";
import { ClrLogo, BgLogo } from "../components/shared/images";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      {/* Background */}
      <BgLogo />
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full items-center justify-center rounded-lg p-3 md:h-36">
          <div className="w-45 md:w-45">
            <ClrLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
