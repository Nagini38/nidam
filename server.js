const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json({ limit: '2mb' }));
app.use(express.static(__dirname));

const DATA_DIR = './data';
const CONTENT_FILE = path.join(DATA_DIR, 'data.json');
const CONFIG_FILE = path.join(DATA_DIR, 'config.json');
// SHA-256 du mot de passe par défaut "Lisaemma9632"
// Le client envoie toujours le hash SHA-256, jamais le mot de passe en clair
const DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD || '6854cafdd99f800be4efd946f7423533e2dfdeed53be26c464cfe11771d0c561';

function ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function getPassword() {
    try {
        return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8')).password || DEFAULT_PASSWORD;
    } catch {
        return DEFAULT_PASSWORD;
    }
}

function getContent() {
    try {
        return JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf8'));
    } catch {
        return {};
    }
}

ensureDataDir();

// Contenu public (pages du site)
app.get('/api/content', (req, res) => {
    res.json(getContent());
});

// Sauvegarde du contenu (admin)
app.post('/api/content', (req, res) => {
    const { password, content } = req.body;
    if (!password || password !== getPassword()) {
        return res.status(401).json({ error: 'Non autorisé' });
    }
    try {
        fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
        res.json({ success: true });
    } catch {
        res.status(500).json({ error: 'Erreur de sauvegarde' });
    }
});

// Vérification mot de passe
app.post('/api/auth', (req, res) => {
    const { password } = req.body;
    res.json({ success: password === getPassword() });
});

// Changement de mot de passe
app.post('/api/password', (req, res) => {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || currentPassword !== getPassword()) {
        return res.status(401).json({ error: 'Mot de passe actuel incorrect' });
    }
    if (!newPassword || newPassword.length < 4) {
        return res.status(400).json({ error: 'Nouveau mot de passe trop court' });
    }
    try {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify({ password: newPassword }, null, 2));
        res.json({ success: true });
    } catch {
        res.status(500).json({ error: 'Erreur de sauvegarde' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Nidam server démarré sur le port ${PORT}`));
