import RecoveryPasswordForm from "../components/Login/RecoveryPasswordForm";
import { Metadata } from "next";
import { Suspense } from "react";
import { ClrLogo, BgRecovery } from "../components/shared/images";

export const metadata: Metadata = {
  title: "Recuperar contraseña",
};
export default function RecoveryPasswordPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <BgRecovery />
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full items-center justify-center rounded-lg p-3 md:h-36">
          <div className="w-45 md:w-45">
            <ClrLogo />
          </div>
        </div>
        <Suspense>
          <RecoveryPasswordForm />
        </Suspense>
      </div>
    </main>
  );
}
