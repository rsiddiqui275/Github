# Angular app (minimal scaffold)

Steps to run the app on Windows PowerShell:

1. Install dependencies:

```powershell
npm install
```

2. Run the dev server (uses the Angular CLI via npx):

```powershell
npm start
```

If `npx` is blocked by PowerShell execution policy, run (for current user):

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

This repository is a minimal scaffold; you can also generate a full project with the Angular CLI:

```powershell
npx -y @angular/cli@latest new . --force --skip-install --style=css --routing=false
```
