# Sonría Studio

Landing premium para clínica dental (Next.js App Router, TypeScript, Tailwind CSS 4, Framer Motion).

## Requisitos

- Node.js 20+ (recomendado)
- npm

## Scripts

```bash
npm install    # dependencias
npm run dev    # desarrollo → http://localhost:3000
npm run build  # build de producción
npm run start  # sirve el build (después de build)
npm run lint   # ESLint
```

## Estructura relevante

- `app/` — layout, estilos globales y página principal
- `components/sections/` — bloques de la landing
- `components/animations/` — animaciones reutilizables
- `components/ui/` — UI base (p. ej. botón)
- `lib/` — constantes, hooks y utilidades

## Git y GitHub (usar cuando quieras)

### Primera vez: subir el repo a GitHub

1. Crea un repositorio **vacío** en GitHub (sin README ni `.gitignore` si te lo ofrece, para evitar conflictos).
2. En la carpeta del proyecto:

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Si tu rama local aún se llama `master`:

```bash
git branch -M main
git push -u origin main
```

3. Autenticación: GitHub suele pedir un **Personal Access Token** (o GitHub CLI / Git Credential Manager).

### Próximas veces (cambios locales → GitHub)

```bash
git add -A
git status
git commit -m "Describe el cambio"
git push
```

### Si clonas en otra máquina

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
npm install
npm run dev
```

## Variables de entorno

Este proyecto no requiere `.env` para la landing actual. Los archivos `.env*` están en `.gitignore`; si más adelante añades API keys, **no las subas** al repositorio.

## Despliegue

- [Vercel](https://vercel.com) (recomendado para Next.js): conecta el repo y usa build `npm run build`, output por defecto de Next.
- Cualquier host con Node: `npm run build` y `npm run start`.

---

Plantilla base: [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app) · [Documentación Next.js](https://nextjs.org/docs)
