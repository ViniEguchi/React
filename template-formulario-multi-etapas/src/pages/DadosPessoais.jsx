import React, { useState } from "react";
import { Button } from "../components/Button";
import { Indicador } from "../components/Indicador";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";

export function DadosPessoais() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function validarDados() {
    if (!nome || nome.trim() === "") {
      alert("Favor preencher o nome");
      return false;
    }

    if (!email || email.trim() === "") {
      alert("Favor preencher o email");
      return false;
    }

    if (!telefone || telefone.trim() === "") {
      alert("Favor preencher o telefone");
      return false;
    }

    return true;
  }

  function redirecionar() {
    if (validarDados()) {
      navigate("/user-address",
        {
          state: {
            nome: nome,
            email: email,
            telefone: telefone
          }
        }
      );
    }
  }

  function salvarNome(event) {
    setNome(event.target.value);
  }

  function salvarEmail(event) {
    setEmail(event.target.value);
  }

  function salvarTelefone(event) {
    setTelefone(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-blue-100">

        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
          Insira seus dados pessoais
        </h2>

        <Indicador steps={3} stepAtual={1} />

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
              onChange={salvarNome}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <Input
              placeholder="seuemail@exemplo.com"
              type="email"
              onChange={salvarEmail}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <Input
              placeholder="(00) 00000-0000"
              type="tel"
              onChange={salvarTelefone}
            />
          </div>
          <div className="w-full flex justify-end">
            <Button onClick={redirecionar}>Proximo</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
