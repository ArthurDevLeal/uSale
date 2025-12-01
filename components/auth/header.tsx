import Logo from "../ui/logo";
interface HeaderProps {
  text: string;
  haveAnText?: boolean;
}
export default function Header({ text, haveAnText = true }: HeaderProps) {
  return (
    <>
      <Logo textIncluded={haveAnText} />
      <h2 className="text-3xl font-medium">{text}</h2>
    </>
  );
}
