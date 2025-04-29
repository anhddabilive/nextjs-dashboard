import Image from "next/image";

export default function Customers() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Customers</h1>
      <p className="text-xl">
        This is the customers page. You can find the source code for this page
        at <code>app/dashboard/customers/page.tsx</code>.
      </p>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-desktop.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
    </div>
  );
}