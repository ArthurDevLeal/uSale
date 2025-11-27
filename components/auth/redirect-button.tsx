import Link from "next/link";

interface RedirectButtonProps {
  text: string;
  anchorText: string;
  href: string;
}
export default function RedirectButton({ text, anchorText, href }: RedirectButtonProps) {
  return (
    <div className="text-sm text-muted-foreground group">
      <p>
        {text}{" "}
        <Link href={href} className="text-foreground group-hover:underline">
          {anchorText}
        </Link>
      </p>
    </div>
  );
}
