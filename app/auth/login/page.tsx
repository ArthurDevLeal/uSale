import { AuthIndex } from "@/components/auth";

export default function Login() {
  return (
    <div className="grid grid-cols-2 w-full gap-48">
      <AuthIndex.SideImage side="left" />
      <div className="flex flex-col justify-between ">
        <div className="flex flex-col justify-center gap-12 h-full">
          <AuthIndex.Header text="Entre na sua conta e embarque novamente no mundo econômico" />
          <AuthIndex.Login.Form />
        </div>
        <AuthIndex.Redirect href="register" text="Não tem uma conta?" anchorText="Cadastrar-se" />
      </div>
    </div>
  );
}
