import Image from "next/image";

export function ClrLogo() {
  return (
    <div className={`flex flex-row items-center  leading-none text-white `}>
      <Image
        src="/images/casalaromanalogo.png"
        alt="Logo"
        className="object-contain"
        width={300}
        height={200}
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
        className="opacity-30"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export function BgRecoveryBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/recovery-background.jpg"
        alt="Background Logo"
        fill
        className="opacity-20"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
