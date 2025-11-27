import Button from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export default function FormLogin() {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
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
        <Button className="w-full">Entrar na conta</Button>
      </div>
    </>
  );
}
