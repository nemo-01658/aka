{
    "listen": null,
    "port": 2053,
    "protocol": "vless",
    "settings": {
        "clients": [
            {
                "email": "my_email",
                "flow": "",
                "id": "my_id"
            }
        ],
        "decryption": "...",
        "encryption": "...",
        "selectedAuth": "ML-KEM-768, Post-Quantum"
    },
    "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
            "alpn": [
                "http/1.1"
            ],
            "certificates": [
                {
                    "buildChain": false,
                    "certificateFile": "/usr/local/x-ui/config/cert.pem",
                    "keyFile": "/usr/local/x-ui/config/key.pem",
                    "oneTimeLoading": false,
                    "usage": "encipherment"
                }
            ],
            "cipherSuites": "",
            "disableSystemRoot": false,
            "echForceQuery": "none",
            "echServerKeys": "",
            "enableSessionResumption": false,
            "maxVersion": "1.3",
            "minVersion": "1.2",
            "rejectUnknownSni": false,
            "serverName": "my.doman",
            "verifyPeerCertInNames": [
                "dns.google",
                "cloudflare-dns.com"
            ]
        },
        "wsSettings": {
            "acceptProxyProtocol": false,
            "headers": {},
            "heartbeatPeriod": 0,
            "host": "",
            "path": "/my-path"
        }
    },
    "tag": "inbound-2053",
    "sniffing": {
        "enabled": true,
        "destOverride": [
            "tls",
            "quic",
            "http"
        ],
        "metadataOnly": false,
        "routeOnly": false
    }
}
