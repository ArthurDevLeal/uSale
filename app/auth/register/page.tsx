import { AuthIndex } from "@/components/auth";

export default function Register() {
  return (
    <div className="grid grid-cols-2 w-full gap-48">
      <div className="flex flex-col justify-between ">
        <div className="flex flex-col justify-center gap-12 h-full">
          <AuthIndex.Header text="Crie sua conta e faça parte de uma nova aventura econômica" />
          <AuthIndex.Register.Form />
        </div>
        <AuthIndex.Redirect href="login" text="Já tem uma conta?" anchorText="Logar-se" />
      </div>
      <AuthIndex.SideImage side="right"/>
    </div>
  );
}
