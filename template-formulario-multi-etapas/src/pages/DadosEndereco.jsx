import React from 'react'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Indicador } from '../components/Indicador';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function DadosEndereco() {
  const navigate = useNavigate();
  const location = useLocation();
  const dadosPessoais = location.state;

  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  function validarDados() {
    if (!endereco || endereco.trim() === "") {
      alert("Favor preencher o endereco");
      return false;
    }

    if (!cidade || cidade.trim() === "") {
      alert("Favor preencher a cidade");
      return false;
    }

    if (!estado || estado.trim() === "") {
      alert("Favor preencher o estado");
      return false;
    }

    return true;
  }

  function redirecionar() {
    if (validarDados()) {
      navigate("/confirm-data",
        {
          state: {
            ...dadosPessoais,
            endereco: endereco,
            cidade: cidade,
            estado: estado
          }
        }
      );
    }
  }

  function retornar() {
    navigate(-1);
  }

  function salvarEndereco(event) {
    setEndereco(event.target.value);
  }

  function salvarCidade(event) {
    setCidade(event.target.value);
  }

  function salvarEstado(event) {
    setEstado(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-blue-100">

        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
          Insira seus dados de endereço
        </h2>

        <Indicador steps={3} stepAtual={2} />

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Endereço
            </label>
            <Input
              placeholder="Digite seu endereço"
              onChange={salvarEndereco}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Cidade
            </label>
            <Input
              placeholder="Digite sua cidade"
              type="text"
              onChange={salvarCidade}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <Input
              placeholder="Digite seu estado"
              onChange={salvarEstado}
            />
          </div>
          <div className="w-full flex justify-between">
            <Button onClick={retornar}>Voltar</Button>
            <Button onClick={redirecionar}>Proximo</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
