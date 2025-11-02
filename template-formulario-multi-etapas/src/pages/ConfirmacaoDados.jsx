import { Button } from "../components/Button";
import { CardInfo } from "../components/CardInfo";

export function ConfirmacaoDados() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-blue-100">

        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900">
          Confirme seus dados
        </h2>

        <div className="space-y-4 mb-8">
         <CardInfo label="Nome" descricao="---"/>
        </div>

        <div className="flex justify-between gap-4">
          <Button>
            Voltar
          </Button>
          <Button>
            Finalizar
          </Button>
        </div>
      </div>
    </div>
  );
}
