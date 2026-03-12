# 🎮 Família Steam — Guia de Configuração

Siga os passos abaixo na ordem. Leva cerca de 10 minutos no total.

---

## PASSO 1 — Criar o banco de dados no Firebase (gratuito)

1. Acesse https://console.firebase.google.com
2. Clique em **"Criar um projeto"**
3. Dê um nome (ex: `familia-steam`) e clique em **Continuar**
4. Desative o Google Analytics (não precisa) → **Criar projeto**
5. Aguarde criar e clique em **Continuar**

### Ativar o Realtime Database:
6. No menu lateral esquerdo, clique em **"Criação"** → **"Realtime Database"**
7. Clique em **"Criar banco de dados"**
8. Escolha a localização **"United States (us-central1)"** → **Próxima**
9. Selecione **"Iniciar no modo de teste"** → **Ativar**
   ⚠️ Isso permite leitura/escrita sem login por 30 dias.
   Depois desse prazo, repita este passo para renovar.

### Pegar as configurações do Firebase:
10. No menu lateral, clique na engrenagem ⚙️ ao lado de "Visão geral do projeto"
11. Clique em **"Configurações do projeto"**
12. Role a página para baixo até **"Seus apps"**
13. Clique no ícone **</>** (Web)
14. Dê um apelido (ex: `familia-steam-web`) → **Registrar app**
15. Copie o bloco `firebaseConfig` que aparece. Vai ser parecido com isso:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "familia-steam.firebaseapp.com",
  databaseURL: "https://familia-steam-default-rtdb.firebaseio.com",
  projectId: "familia-steam",
  storageBucket: "familia-steam.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## PASSO 2 — Configurar o arquivo index.html

1. Abra o arquivo `index.html` num editor de texto
   (Bloco de Notas, VS Code, Notepad++, qualquer um serve)

2. Encontre este trecho no início do arquivo (linha ~30):

```js
const firebaseConfig = {
  apiKey:            "COLE_AQUI_SUA_API_KEY",
  authDomain:        "COLE_AQUI.firebaseapp.com",
  databaseURL:       "https://COLE_AQUI-default-rtdb.firebaseio.com",
  projectId:         "COLE_AQUI",
  storageBucket:     "COLE_AQUI.appspot.com",
  messagingSenderId: "COLE_AQUI",
  appId:             "COLE_AQUI"
};
```

3. **Substitua** os valores `"COLE_AQUI..."` pelos valores copiados do Firebase

4. **Salve** o arquivo

---

## PASSO 3 — Publicar no Netlify (gratuito)

1. Acesse https://netlify.com e clique em **"Sign up"**
2. Crie uma conta com Google ou GitHub
3. Na página inicial, procure a área que diz:
   **"Deploy manually — drag and drop your site folder"**
4. **Arraste a pasta `steam-checklist`** (que contém o index.html) para essa área
5. Aguarde alguns segundos...
6. ✅ Pronto! O Netlify vai gerar um link tipo:
   `https://nifty-mango-abc123.netlify.app`

### Personalizar o nome do link (opcional):
- Em **"Site configuration"** → **"Change site name"**
- Digite algo como `familia-steam` → o link fica `familia-steam.netlify.app`

---

## PASSO 4 — Compartilhar com os amigos

Mande o link do Netlify para seus amigos.
Todos podem acessar, adicionar jogos e marcar como comprado em tempo real! 🎮

---

## ⚠️ Renovar permissões do Firebase após 30 dias

O modo de teste expira. Para renovar:
1. Acesse https://console.firebase.google.com
2. Vá em **Realtime Database** → **Regras**
3. Substitua o conteúdo por:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
4. Clique em **Publicar**

---

## 🆘 Problemas comuns

**"Não foi possível buscar o jogo"**
→ O link precisa ser no formato: `store.steampowered.com/app/NÚMERO/...`

**A lista não aparece / não salva**
→ Verifique se copiou o `firebaseConfig` corretamente no index.html

**Quero adicionar mais amigos**
→ Basta mandar o link do Netlify. Não precisa fazer nada.
