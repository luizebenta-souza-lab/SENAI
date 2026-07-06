import os
import time

# Limpa a tela
os.system("cls" if os.name == "nt" else "clear")


def escrever(texto, velocidade=0.06):
    for letra in texto:
        print(letra, end="", flush=True)
        time.sleep(velocidade)
    print()


print("=" * 50)
escrever("Inicializando...")
time.sleep(1)

print("=" * 50)
time.sleep(1)

mensagens = [
    "Shinji...",
    "",
    "Você esperou que alguém entendesse você.",
    "Esperou que alguém dissesse que tudo ficaria bem.",
    "",
    "Esperou que alguém aparecesse.",
    "",
    "Esperou que alguém segurasse a sua mão.",
    "",
    "Mas ninguém veio.",
    "",
    "Ninguém podia viver a sua vida por você.",
    "",
    "Resumindo...",
    "",
    "Você está sozinho, Shinji.",
    "",
    "E sempre esteve.",
    "",
    "..."
]

for linha in mensagens:
    escrever(linha)
    time.sleep(1)

print()
input("Pressione ENTER para sair...")
