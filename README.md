# Timed Survey

A Meteor.js web application that measures user response times to visual stimuli. It displays an image and, once the image has fully loaded, presents agree/disagree voting buttons. The elapsed time between image load and the user's vote is captured and logged — making it useful for UX research, perception studies, or response-time experiments.

## How it works

1. A page renders and an image is dynamically loaded.
2. The moment the image finishes loading is recorded.
3. Two voting buttons appear: **akkoord** (agree) and **niet akkoord** (disagree).
4. When the user votes, the time difference between image load and the vote is calculated and logged to the console.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Meteor.js](https://www.meteor.com/) 1.1.0.2 |
| Routing | [Iron Router](https://github.com/iron-meteor/iron-router) |
| UI Framework | [Bootstrap](https://getbootstrap.com/) (twbs:bootstrap) |
| DOM / Events | jQuery |
| Reactivity | Meteor Reactive Var |
| Templating | Spacebars (Meteor's Blaze templating engine) |
| Platforms | Browser + Server |

## Project structure

```
.
├── client/
│   ├── main.html                        # App entry point (title)
│   └── templates/
│       ├── application/layout.html      # Base layout
│       ├── home/
│       │   ├── home.html                # Survey page template
│       │   └── home.js                  # Image loading & timing logic
│       └── includes/
│           ├── header.html              # Header partial
│           └── errors.html             # Error display partial
├── lib/
│   └── router.js                        # Iron Router configuration
├── public/                              # Static assets (images)
└── .meteor/                             # Meteor configuration & package manifest
```

## Getting started

### Prerequisites

- [Meteor](https://docs.meteor.com/install.html) installed on your machine.

### Run locally

```bash
meteor
```

The app will be available at `http://localhost:3000`.

## License

See [LICENSE](LICENSE).
