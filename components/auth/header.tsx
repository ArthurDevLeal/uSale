import Logo from "../ui/logo";
interface HeaderProps {
  text: string;
  haveAnLogo?: boolean;
}
export default function Header({ text, haveAnLogo = true }: HeaderProps) {
  return (
    <>
      <Logo iconIncluded={haveAnLogo} />
      <h2 className="text-3xl font-medium">{text}</h2>
    </>
  );
}
