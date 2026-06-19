# 🐾 PetFeeder

Aplicativo mobile para **alimentação remota de pets**, desenvolvido com React Native + Expo. Controle o dispensador de ração do seu animal de estimação de qualquer lugar, em tempo real.

## Funcionalidades

### Dashboard
- Exibe o **nível atual de ração** no dispensador em tempo real via WebSocket
- Botão **"Despejar Alimento"** para acionar o dispensador remotamente
- Indicador de status da conexão (conectado / desconectado)

### Alarmes
- Cadastre **horários automáticos** para o dispensador acionar sem intervenção manual
- Alarmes salvos no **Firebase Firestore**, sincronizados em tempo real
- Visualização dos horários programados no formato HH:MM

## Tecnologias

| Tecnologia | Uso |
|---|---|
| React Native + Expo SDK 54 | Framework mobile |
| Firebase Firestore | Armazenamento dos alarmes |
| WebSocket (`react-use-websocket`) | Comunicação em tempo real com o hardware |
| TypeScript | Tipagem estática |
| React Navigation | Navegação entre telas |

## Como rodar

**Pré-requisitos:** Node.js 20+ e Expo Go instalado no celular

```bash
# Instalar dependências
npm install --legacy-peer-deps

# Iniciar o projeto
npx expo start
```

Escaneie o QR code com o app **Expo Go** no celular.

## Estrutura do projeto

```
PetFeeder/
├── App.tsx                  # Entrada do app e navegação por abas
├── src/
│   ├── components/
│   │   ├── appBarComponent.tsx      # Barra superior
│   │   ├── dashboardComponent.tsx   # Tela de nível de ração
│   │   ├── alarmeComponent.tsx      # Tela de alarmes
│   │   └── contentComponent.tsx     # Controlador de telas
│   ├── styles/
│   │   ├── theme.ts                 # Paleta de cores
│   │   ├── appBarStyles.tsx
│   │   ├── dashboardStyles.tsx
│   │   └── alarmeStyles.tsx
│   └── utils/
│       ├── storage.ts               # AsyncStorage (nativo)
│       └── storage.web.ts           # localStorage (web)
└── assets/
```

## Hardware

O app se comunica com um microcontrolador (ex: ESP32) via **WebSocket** e **Firebase**, responsável por:
- Reportar o nível de ração do reservatório
- Acionar o motor do dispensador ao receber o comando
- Executar os alarmes programados nos horários definidos
