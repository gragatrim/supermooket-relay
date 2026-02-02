# supermooket relay

A GUN relay server for peer-to-peer data sharing in supermooket.

## Deploy to Render

### 1. Create a GitHub repo

Create a new GitHub repo (e.g. `supermooket-relay`). Push **only** the contents of this `relay/` directory to it — `package.json` and `server.js` must be at the repo root, not in a subfolder.

```bash
cd relay
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:YOUR_USERNAME/supermooket-relay.git
git branch -M main
git push -u origin main
```

### 2. Create the Render service

1. Go to https://dashboard.render.com
2. Click **New** → **Web Service**
3. Connect your GitHub account if you haven't already
4. Select the `supermooket-relay` repo
5. Fill in the settings:
   - **Name**: `supermooket-relay` (or whatever you like)
   - **Region**: pick one close to you
   - **Branch**: `main`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: **Free**
6. Click **Create Web Service**

Render will build and deploy automatically. Once the deploy finishes, your service URL will be shown at the top of the page (e.g. `https://supermooket-relay.onrender.com`).

### 3. Verify the relay

Visit `https://supermooket-relay.onrender.com/` in your browser. You should see:

```
supermooket relay ok
```

### 4. Update the plugin

In `supermooket.user.js`, add your relay URL to the `GUN_RELAYS` array:

```js
const GUN_RELAYS = [
  'https://supermooket-relay.onrender.com/gun',
];
```

Reload the game page and check the browser console — you should see:

```
supermooket: GUN initialized with 1 relay(s)
supermooket: relay reachable: https://supermooket-relay.onrender.com/gun
```

## Notes

- Render's free tier spins down after 15 minutes of inactivity. The first request after sleeping takes ~30 seconds to wake up. GUN reconnects automatically, so this is fine in practice.
- To run the relay locally for testing: `npm install && npm start`, then use `http://localhost:8765/gun` as the relay URL.
