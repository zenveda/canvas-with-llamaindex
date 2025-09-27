# CopilotKit LlamaIndex Canvas Starter - Replit Setup

## Project Overview
This is a CopilotKit + LlamaIndex canvas starter application with AI-powered visual canvas functionality. The project consists of:

- **Frontend**: Next.js 15 application with CopilotKit integration running on port 5000
- **Backend**: Python FastAPI agent using LlamaIndex and OpenAI running on port 9000
- **Architecture**: Full-stack AI application with real-time bidirectional synchronization

## Recent Changes (September 27, 2025)
- Configured Next.js to run on port 5000 with hostname 0.0.0.0 for Replit compatibility
- Added CORS headers for Replit proxy environment
- Set up OpenAI integration with proper secret management
- Configured VM deployment target for production
- Successfully tested both frontend and backend components

## User Preferences
- Uses npm as package manager (Node.js side)
- Uses uv for Python dependency management
- Prefers concurrency for running UI and agent together
- Full-stack development approach

## Project Architecture
```
Root/
├── src/app/            # Next.js frontend application
├── agent/              # Python LlamaIndex agent
├── package.json        # Node.js dependencies and scripts
└── agent/pyproject.toml # Python dependencies
```

## Environment Setup
- **Languages**: Python 3.11, Node.js 20
- **Required Secrets**: OPENAI_API_KEY (for LlamaIndex agent)
- **Ports**: Frontend (5000), Agent (9000)
- **Deployment**: VM target with npm run dev command

## Key Features
- Visual canvas with drag-free interface
- Four card types: Project, Entity, Note, Chart
- Real-time AI synchronization
- Multi-step planning with progress tracking
- Human-in-the-loop interrupts
- JSON/Visual view toggle
- Responsive design (desktop sidebar, mobile popup)

## Development Commands
- `npm run dev` - Start both UI and agent concurrently
- `npm run dev:ui` - Start only Next.js frontend
- `npm run dev:agent` - Start only Python agent
- `npm run install:agent` - Install Python dependencies

## Important Notes
- Application requires OpenAI API key to function properly
- Agent runs on localhost:9000, UI communicates via /api/copilotkit route
- Configured for Replit's proxy environment with proper host settings
- Uses Turbopack for faster development builds