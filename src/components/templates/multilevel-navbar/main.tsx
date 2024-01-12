import { DefaultNavbar } from "./default-navbar";
import { navbarConfig } from "./navbarConfig";

export default function Main() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <DefaultNavbar mainNav={navbarConfig} />
    </div>
  );
}
