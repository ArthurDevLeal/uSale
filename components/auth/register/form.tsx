import Button from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export default function FormRegister() {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 group">
          <Label htmlFor="inputFullname">Nome completo</Label>
          <Input id="inputFullname" placeholder="Insira seu nome completo" />
        </div>
        <div className="flex flex-col gap-2 group">
          <Label htmlFor="inputEmail">Email</Label>
          <Input id="inputEmail" placeholder="Insira seu email" />
        </div>
        <div className="flex flex-col gap-2 group">
          <Label htmlFor="inputPassword">Senha</Label>
          <Input id="inputPassword" placeholder="Insira sua senha" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Button className="w-full">Criar conta</Button>
        <p className="text-sm text-muted-foreground text-center">
          Ao se inscrever, você concorda com nossos
          <br /> <span className="text-foreground">Termos e Condições</span> e{" "}
          <span className="text-foreground">Política de Privacidade</span>
        </p>
      </div>
    </>
  );
}
