import Image from "next/image";

export function ClrLogo() {
  return (
    <div className={`flex flex-row items-center  leading-none text-white `}>
      <Image
        src="/images/casalaromanalogo.png"
        alt="Logo"
        className="object-contain"
        width={400}
        height={300}
      />
    </div>
  );
}

export function BgLogo() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Image
        src="/images/background.jpg"
        alt="Background Logo"
        fill
        quality={100}
        className="opacity-30 object-cover"
      />
    </div>
  );
}

export function BgRecovery() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Image
        src="/images/RecoveryPassword/maintenance.jpg"
        alt="Background Logo"
        fill
        className="opacity-20 object-cover"
      />
    </div>
  );
}

export function BgMaintenance() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Image
        src="/images/maintenance/maintenance.jpg"
        alt="Background Logo"
        fill
        className="opacity-40 object-cover"
      />
    </div>
  );
}
