import { Button } from "../components/Button";
import { Indicador } from "../components/Indicador";
import { Input } from "../components/Input";

export function DadosPessoais() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-blue-100">

        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
          Insira seus dados pessoais
        </h2>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <Input
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <Input
              placeholder="seuemail@exemplo.com"
              type="email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <Input
              placeholder="(00) 00000-0000"
              type="tel"
            />
          </div>
          <div className="w-full flex justify-end">
            <Button>Proximo</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
