import uvicorn
import os
from .server import app

def main():
    host = os.environ.get("HOST", "0.0.0.0")
    port_str = os.environ.get("PORT", "9000")
    try:
        port = int(port_str)
    except Exception:
        port = 9000
    uvicorn.run(app, host=host, port=port)

if __name__ == "__main__":
    main()

__all__ = ["app"]
