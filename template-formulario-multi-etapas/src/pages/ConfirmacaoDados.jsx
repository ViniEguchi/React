import React from "react";
import { Button } from "../components/Button";
import { CardInfo } from "../components/CardInfo";
import { Indicador } from '../components/Indicador';
import { useLocation, useNavigate } from "react-router-dom";

export function ConfirmacaoDados() {
  const navigate = useNavigate();
  const location = useLocation();
  const dados = location.state;

  function retornar() {
    navigate(-1);
  }

  function redirecionar() {
    navigate("/done",
      {
        state: {
          nome: dados.nome
        }
      }
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-blue-100">

        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900">
          Confirme seus dados
        </h2>

        <Indicador steps={3} stepAtual={3} />

        <div className="space-y-4 mb-8">
          <CardInfo label="Nome" descricao={dados.nome} />
          <CardInfo label="Email" descricao={dados.email} />
          <CardInfo label="Telefone" descricao={dados.telefone} />
          <CardInfo label="Endereço" descricao={dados.endereco} />
          <CardInfo label="Cidade" descricao={dados.cidade} />
          <CardInfo label="Estado" descricao={dados.estado} />
        </div>

        <div className="flex justify-between gap-4">
          <Button onClick={retornar}>Voltar</Button>
          <Button onClick={redirecionar}>Finalizar</Button>
        </div>
      </div>
    </div>
  );
}
