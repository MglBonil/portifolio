# Como fazer deploy no GitHub Pages

## Configuração Automática (Recomendado)

O projeto já está configurado com GitHub Actions para deploy automático!

### Passos:

1. **Certifique-se de que o repositório está no GitHub**
   - Se ainda não estiver, crie um repositório no GitHub
   - Faça push do código para o repositório

2. **Configure o GitHub Pages no repositório:**
   - Vá em **Settings** > **Pages** no seu repositório
   - Em **Source**, selecione **GitHub Actions**
   - Salve as configurações

3. **Faça push para a branch `main`:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

4. **O deploy será automático!**
   - O GitHub Actions irá fazer o build e deploy automaticamente
   - Você pode acompanhar o progresso em **Actions** no seu repositório
   - Após o deploy, seu site estará disponível em: `https://seu-usuario.github.io/portifolio/`

### Importante:

- O `base` no `vite.config.ts` está configurado como `/portifolio/`
- Se o nome do seu repositório for diferente, você precisa alterar o `base` no arquivo `vite.config.ts`
- Por exemplo, se seu repositório se chama `meu-portfolio`, altere para `/meu-portfolio/`

## Deploy Manual (Alternativa)

Se preferir fazer deploy manual:

1. **Instale o gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Adicione o script no package.json:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Execute o deploy:**
   ```bash
   npm run deploy
   ```

## Verificando o Deploy

Após o deploy, acesse:
- `https://seu-usuario.github.io/portifolio/`

O deploy pode levar alguns minutos para ficar disponível.

