# Modified DIZZANZZ BAIL

<p align='center'>
  <img src="https://files.catbox.moe/ywsqgs.jpg" width="172">
</p>

---

## Usage
```json
"dependencies": {
  "@whiskeysockets/baileys": "github:ikhsan135/DIZZANZZ_BAIL"
}
```

## Import
```javascript
const {
  default: makeWASocket,
  // Other Options 
} = require('@whiskeysockets/baileys');
```

---
# Cara Konek Ke WhatsApp

## Pakai QR Code
```javascript
const {
  default: makeWASocket
} = require('@whiskeysockets/baileys');

const client = makeWASocket({
  browser: ['Windows', 'Edge', '20.00.1'],
  printQRInTerminal: true
})
```

## Pakai Nomor
```javascript
const {
  default: makeWASocket,
  fetchLatestWAWebVersion
} = require('@whiskeysockets/baileys');

const client = makeWASocket({
  browser: ['Windows', 'Edge', '20.00.1'],
  printQRInTerminal: false,
  version: fetchLatestWAWebVersion()
  // Other options
});

const number = "628XXXXX";
const code = await client.requestPairingCode(number.trim()) /* Pakai : (number, "YYYYYYYY") untuk custom-pairing */

console.log("Kode pairing mu : " + code)
```

# Kirim Pesan

## Kirim orderMessage
```javascript
const fs = require('fs');
const DIZZANZZ_Image = fs.readFileSync('./DIZZANZZ_Image');

await client.sendMessage(m.chat, {
  thumbnail: DIZZANZZ_Image,
  message: "DIZZANZZ APP ON",
  orderTitle: "DIZZANZZ-Corporation",
  totalAmount1000: 72502,
  totalCurrencyCode: "IDR"
}, { quoted: m })
```

## Kirim pollResultSnapshotMessage
```javascript
await client.sendMessage(m.chat, {
  pollResultMessage: {
    name: "DIZZANZZ-Corporation",
    options: [
      {
        optionName: "Polling 1"
      },
      {
        optionName: "Polling 2"
      }
    ],
    newsletter: {
      newsletterName: "DIZZANZZ | Informasi",
      newsletterJid: "120363400747111340@newsletter"
    }
  }
})
```

## Kirim productMessage
```javascript
await client.relayMessage(m.chat, {
  productMessage: {
    title: "DIZZANZZ.APP",
    description: "DIZZANZZ BAIL",
    thumbnail: { url: "./DIZZANZZ_Image" },
    productId: "DIZZANZZ_TOKEN_123",
    retailerId: "DIZZANZZ_RETAILER_456",
    url: "https://github.com/ikhsan135",
    body: "Team DIZZANZZ",
    footer: "Footer DIZZANZZ",
    buttons: [
      {
        name: "cta_url",
        buttonParamsJson: "{\"display_text\":\"DIZZANZZ-APP\",\"url\":\"https://github.com/ikhsan135\"}"
      }
    ],
    priceAmount1000: 72502,
    currencyCode: "IDR"
  }
})
```

---

## Follow Untuk Info Lebih Lanjut
**GitHub**: [https://github.com/ikhsan135](https://github.com/ikhsan135)  
**Telegram**: [https://t.me/ikhsanproject](https://t.me/ikhsanproject)

Follow **@Ikhsanproject** kalau mau liat tipe message yang lain :v

---

**Repository**: [https://github.com/ikhsan135/DIZZANZZ_BAIL](https://github.com/ikhsan135/DIZZANZZ_BAIL)  
**Modified by**: @Ikhsanproject
