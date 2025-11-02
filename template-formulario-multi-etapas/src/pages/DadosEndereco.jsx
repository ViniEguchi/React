import React from 'react'
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export  function DadosEndereco() {
  return (
       <div className="flex flex-col items-center justify-center min-h-screen from-blue-50 via-white to-blue-100 px-4">
          <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-blue-100">
            
            <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
              Insira seus dados de endereço
            </h2>
    
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
                />
              </div>
    
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Cidade
                </label>
                <Input
                  placeholder="Digite sua cidade"
                  type="text"
                />
              </div>
    
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <Input
                  placeholder="Digite seu estado"
                />
              </div>
              <div className="w-full flex justify-between">
                <Button>Voltar</Button>
                <Button>Proximo</Button>
              </div>
            </form>
          </div>
        </div>
  )
}
