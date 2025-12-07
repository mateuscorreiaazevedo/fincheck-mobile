# 📱 Fincheck Mobile

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-0.81.4-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-~54.0-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

Aplicativo mobile de controle financeiro pessoal com interface intuitiva e funcionalidades completas para gerenciamento de receitas, despesas e contas bancárias.

</div>

## 🎯 Sobre o Projeto

**Fincheck Mobile** é um aplicativo de gestão financeira pessoal que permite aos usuários controlar suas finanças de forma simples e eficiente. Com uma arquitetura robusta e código de alta qualidade, o projeto demonstra práticas modernas de desenvolvimento mobile.

### ✨ Principais Funcionalidades

- 🔐 **Autenticação Completa**: Login e registro com JWT
- 💰 **Gestão de Transações**: Controle de receitas e despesas
- 🏦 **Contas Bancárias**: Gerenciamento de múltiplas contas
- 📊 **Dashboard**: Visualização de resumo financeiro
- 🎨 **Interface Moderna**: Design responsivo com NativeWind
- 🔄 **Sincronização**: Integração com API backend

## 🛠️ Tecnologias Utilizadas

### Core

- **[React Native](https://reactnative.dev/)** (0.81.4) - Framework mobile
- **[Expo](https://expo.dev/)** (~54.0) - Plataforma de desenvolvimento
- **[TypeScript](https://www.typescriptlang.org/)** (~5.9.2) - Tipagem estática

### UI/UX

- **[NativeWind](https://www.nativewind.dev/)** (^4.2.1) - TailwindCSS para React Native
- **[React Native SVG](https://github.com/software-mansion/react-native-svg)** - Ícones e gráficos vetoriais
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - Animações performáticas

### State & Data Management

- **[TanStack Query](https://tanstack.com/query)** (^5.90.5) - Gerenciamento de estado assíncrono
- **[React Hook Form](https://react-hook-form.com/)** (^7.65.0) - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** (^4.1.12) - Validação de schemas

### Navigation

- **[Expo Router](https://docs.expo.dev/router/introduction/)** (~6.0.12) - Roteamento baseado em arquivo
- **[React Navigation](https://reactnavigation.org/)** (^7.1.18) - Navegação nativa

### Network & Storage

- **[Axios](https://axios-http.com/)** (^1.12.2) - Cliente HTTP
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)** - Persistência local

### Code Quality

- **[Ultracite](https://ultracite.dev/)** (5.6.4) - Linter/Formatter baseado em Biome
- **[Biome](https://biomejs.dev/)** (2.2.6) - Toolchain de qualidade de código

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Entrada do app com Expo Router
├── assets/                 # Estilos e recursos estáticos
├── components/             # Componentes reutilizáveis
│   ├── auth/              # Componentes de autenticação
│   ├── layouts/           # Layouts (Auth, Private)
│   └── ui/                # Componentes de UI (Button, Input, etc)
├── config/                # Configurações (variáveis de ambiente)
├── constants/             # Constantes da aplicação
├── contexts/              # Contextos React (AuthContext)
├── hooks/                 # Custom hooks
│   └── auth/             # Hooks de autenticação
├── models/                # Modelos de dados/tipos
│   ├── bank-accounts/    # Modelos de contas bancárias
│   └── user/             # Modelos de usuário
├── routes/                # Configuração de rotas
│   ├── auth/             # Rotas de autenticação
│   └── private/          # Rotas privadas
├── screens/               # Telas da aplicação
│   ├── Dashboard/        # Tela principal
│   ├── Login/            # Tela de login
│   └── Register/         # Tela de registro
├── services/              # Serviços e integrações
│   ├── api/              # Cliente HTTP
│   └── auth/             # Serviço de autenticação
├── types/                 # Tipos TypeScript globais
└── utils/                 # Funções utilitárias
```

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura **MVVM (Model-View-ViewModel)** com separação clara de responsabilidades:

- **Models**: Definição de tipos e estruturas de dados
- **Views**: Componentes React Native (screens/components)
- **ViewModels**: Lógica de negócio e estado (viewModel.ts, hooks)
- **Services**: Camada de integração com APIs externas

### Padrões de Código

- ✅ **Tipagem estrita** com TypeScript
- ✅ **Componentização modular** e reutilizável
- ✅ **Custom hooks** para lógica compartilhada
- ✅ **Validação de formulários** com Zod schemas
- ✅ **Tratamento de erros** consistente
- ✅ **Acessibilidade** (a11y) em todos os componentes
- ✅ **Code quality** garantido por Ultracite/Biome

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v18 ou superior)
- pnpm (recomendado) ou npm/yarn
- Expo CLI
- Android Studio (para Android) ou Xcode (para iOS)

### Instalação

1. Clone o repositório

```bash
git clone https://github.com/mateuscorreiaazevedo/fincheck-mobile.git
cd fincheck-mobile
```

2. Instale as dependências

```bash
pnpm install
```

3. Configure as variáveis de ambiente

```bash
# Crie um arquivo src/config/env.ts com as configurações necessárias
```

4. Inicie o servidor de desenvolvimento

```bash
pnpm start
```

5. Execute em um dispositivo/emulador

```bash
# Android
pnpm android

# iOS
pnpm ios
```

## 📜 Scripts Disponíveis

```bash
pnpm start        # Inicia o servidor Expo
pnpm android      # Executa no Android
pnpm ios          # Executa no iOS
pnpm web          # Executa na web
pnpm lint         # Executa o linter
pnpm typecheck    # Verifica os tipos TypeScript
```

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Cores**: Definidas em `src/assets/styles/colors.ts`
- **Tipografia**: DM Sans (Google Fonts)
- **Componentes**: Biblioteca própria em `src/components/ui/`
- **Ícones**: SVG customizados em `src/components/ui/icons/`
- **Espaçamento**: Sistema baseado em TailwindCSS

### Componentes Principais

- `<Button />` - Botão com variantes e estados
- `<Input />` - Campo de entrada com validação
- `<Text />` - Tipografia padronizada
- `<Logo />` - Logo da aplicação
- `<RoundedIcon />` - Ícone circular
- `<FieldError />` - Mensagem de erro de formulário

## 🔐 Autenticação

O fluxo de autenticação implementa:

1. **Login/Registro**: Formulários validados com Zod
2. **JWT Token**: Armazenamento seguro com AsyncStorage
3. **Refresh Token**: Renovação automática de sessão
4. **Protected Routes**: Rotas privadas com validação de autenticação
5. **Context API**: Gerenciamento de estado de autenticação global

## 📱 Features Implementadas

- [x] Autenticação (Login/Registro)
- [x] Dashboard com resumo financeiro
- [x] Listagem de transações
- [x] Gerenciamento de contas bancárias
- [x] Validação de formulários
- [x] Tratamento de erros
- [x] Loading states
- [x] Navegação com Expo Router
- [x] Temas e estilos com NativeWind

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Mateus Correia Azevedo**

- GitHub: [@mateuscorreiaazevedo](https://github.com/mateuscorreiaazevedo)

---

<div align="center">
  Desenvolvido com ❤️ e ☕
</div>
