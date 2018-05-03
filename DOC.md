# How to Use

To Use it without any change, the backend should follow these api.

Or the frontend cannot render the data correctly

success: {"success": []}

error: {"error": []}

prefix: /config.coin_name/

## Miner/Worker(Rig)

- /:address -> locate a miner

Response:

```json
{"success": [
    {
        "address": "asdasdasd",
        "total_hashrate": 123,
        "worker_list": [
            {
                "name": "x",
                "hashrate": 123
            }
        ]
    }
]}
```

- /:address/:worker -> locate a worker

## Network

## Pool

## Calculator

