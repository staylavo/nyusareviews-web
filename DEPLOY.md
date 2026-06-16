# Deploy NY USA Reviews (web) to Vercel

The fastest path — no GitHub needed. Vercel's CLI uploads this folder, builds it, and gives you a live URL.

## 1. Deploy (one command)
In a terminal:
```
cd "C:\Users\User\Documents\Claude\Projects\ny usa reviews\web"
npx vercel
```
First run installs the Vercel CLI and asks you to **log in** — it opens your browser to authenticate (this part is yours; I can't log in for you). Then answer the prompts:

| Prompt | Answer |
|---|---|
| Set up and deploy "…/web"? | **Y** |
| Which scope? | your account |
| Link to existing project? | **N** |
| Project name? | press Enter (nyusareviews-web) |
| In which directory is your code? | **./** (you're already in web) |
| Modify settings? | **N** (it auto-detects Next.js) |

It builds and prints a preview URL like `https://nyusareviews-web-xxxx.vercel.app`. Open it — that's your live site.

For the production URL:
```
npx vercel --prod
```

## 2. If the build fails
Copy the error from the terminal and send it to me — I'll fix it and you redeploy. (Unverified code may have a small type error; this is how we catch it.)

## 3. After it's live (later)
- **Env vars** (Vercel dashboard → Project → Settings → Environment Variables): add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and the Amazon PA-API keys to switch from mock data to live data + pricing. Then redeploy.
- **Custom domain**: Settings → Domains → add `nyusareviews.com`. Only repoint DNS after you've verified the Vercel site looks right — the old Lovable site stays up until you switch.

## Alternative: let me drive it in the browser
If you'd rather I do more, push this `web/` folder to a GitHub repo, then I'll drive the Vercel web import (Add New → Project → import the repo → set root to the repo root → Deploy) via the browser. You still do the one-time Vercel sign-in.
