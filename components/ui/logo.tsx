const SvgIcon = ({ isDarker }: { isDarker?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
    <path
      fill={isDarker ? "#1E212230" : "#759BBF"}
      d="M39.5 0a8.5 8.5 0 0 1 6.377 14.116A23.9 23.9 0 0 1 48 24c0 3.523-.76 6.869-2.123 9.883a8.5 8.5 0 0 1-11.994 11.994A23.9 23.9 0 0 1 24 48c-3.523 0-6.87-.76-9.884-2.123A8.5 8.5 0 0 1 2.122 33.883 23.9 23.9 0 0 1 0 24c0-3.523.758-6.87 2.122-9.884A8.5 8.5 0 0 1 14.116 2.122 23.9 23.9 0 0 1 24 0c3.523 0 6.869.759 9.883 2.122A8.47 8.47 0 0 1 39.5 0"
    ></path>
    <path
      fill="#fff"
      d="M18.719 18.985h.645a5.4 5.4 0 0 1 2.014-2.138q1.416-.864 3.456-.864h1.445v-3.401h2.736v3.401h6.403v2.736h-6.403v.644a5.4 5.4 0 0 1 2.138 2.015q.864 1.416.864 3.456v1.445h3.401v2.736h-3.401v6.403H29.28v-6.403h-.645a5.4 5.4 0 0 1-2.014 2.138q-1.416.864-3.456.864h-1.445v3.401h-2.736v-3.401h-6.403V29.28h6.403v-.645a5.4 5.4 0 0 1-2.138-2.014q-.864-1.416-.864-3.456v-1.445h-3.401v-2.736h3.401v-6.403h2.736zm4.25 2.736a3 3 0 0 0-.24.209q-1.008.96-1.008 2.856v.245q.097.126.209.24.96 1.008 2.856 1.008h.245q.126-.097.24-.209 1.008-.96 1.008-2.856v-.246a3 3 0 0 0-.209-.24q-.96-1.007-2.856-1.007z"
    ></path>
  </svg>
);

interface LogoProps {
  textIncluded?: boolean;
  isDarker?: boolean;
}
export default function Logo({ textIncluded = true, isDarker = true }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <SvgIcon isDarker={isDarker} />
      {textIncluded && <h1 className="font-extralight text-[32px] text-foreground">uSale</h1>}
    </div>
  );
}
