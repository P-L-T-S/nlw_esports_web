import { useEffect, useState } from "react";
import { CaretDown, CaretUp, Check, GameController } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";

import { IGames } from "../services/fetchGamesService";
import { Input } from "./Form/Input";

interface IModelProps {
  games: IGames[];
}

export function CreateAdModal({ games }: IModelProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25 ">
        <Dialog.Title className="text-2xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <section className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <Select.Root defaultValue="none">
              <Select.Trigger className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 flex items-center justify-between">
                <Select.Value />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal className="bg-zinc-800 w-full p-2 mt-10 rounded text-zinc-300">
                <Select.Content>
                  <Select.SelectViewport className="">
                    <Select.Item
                      value="none"
                      className="px-3 flex items-center justify-between"
                    >
                      <Select.ItemText>
                        Selecione o game que quer jogar
                      </Select.ItemText>
                      <Select.ItemIndicator>
                        <Check />
                      </Select.ItemIndicator>
                    </Select.Item>
                    {games.map((game) => (
                      <Select.Item
                        value={game.id}
                        key={game.id}
                        className="px-3 flex items-center justify-between "
                      >
                        <Select.ItemText>{game.title}</Select.ItemText>
                        <Select.ItemIndicator>
                          <Check />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.SelectViewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              type="text"
              id="name"
              placeholder="Como te chamam dentro do game"
            />
          </section>
          <section className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga a quantos anos</label>
              <Input
                type="number"
                id="yearsPlaying"
                placeholder="Tudo bem ser zero"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual o seu Discord</label>
              <Input type="text" id="discord" placeholder="Usuario#0000" />
            </div>
          </section>

          <section className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar</label>
              <div className="grid grid-cols-4 gap-2">
                <button title="Domingo" className="w-8 h-8 rounded bg-zinc-900">
                  D
                </button>
                <button title="Segunda" className="w-8 h-8 rounded bg-zinc-900">
                  S
                </button>
                <button title="Terça" className="w-8 h-8 rounded bg-zinc-900">
                  T
                </button>
                <button title="Quarta" className="w-8 h-8 rounded bg-zinc-900">
                  Q
                </button>
                <button title="Quinta" className="w-8 h-8 rounded bg-zinc-900">
                  Q
                </button>
                <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900">
                  S
                </button>
                <button title="Sábado" className="w-8 h-8 rounded bg-zinc-900">
                  S
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="">Qual horário do dia ? </label>

              <div className="grid grid-cols-2 gap-2">
                <Input type="time" id="hoursStart" placeholder="De" />
                <Input type="time" id="hoursEnd" placeholder="Até" />
              </div>
            </div>
          </section>

          <section className="mt-2 flex gap-2 items-center text-sm">
            <Checkbox.Root className="w-6 h-6 p-1 items-center rounded bg-zinc-900">
              <Checkbox.Indicator className="">
                <Check className="w- h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </section>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-all duration-200"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex gap-3 items-center hover:bg-violet-600 transition-all duration-200"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
