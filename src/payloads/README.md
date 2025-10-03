# Discord Message Payloads

This directory contains JSON files representing Discord API message payloads for all DiscordComponent instances used throughout the Pycord Guide.

## Structure

The payloads are organized to mirror the guide's content structure:

```
payloads/
├── voice/                      # Voice-related message examples
├── interactions/               # Interaction examples
│   ├── ui-components/          # Buttons, select menus, modals
│   ├── application-commands/   # Slash commands, context menus
│   └── index/                  # General interaction examples
├── getting-started/            # First bot examples
├── popular-topics/             # Error handling and other topics
│   └── error-handling/
├── extensions/                 # Extension examples
│   ├── commands/               # Prefixed commands and help
│   └── bridge/                 # Bridge command examples
└── more/                       # Contributing guide examples
    └── contributing/
```

## User Profiles

All payloads use the following user profiles (defined in `src/components/CustomHead.astro`):

### BobDotCom (bob)

- **User ID**: `690420846774321221`
- **Avatar**: `/avatar/bob.webp`
- **Role Color**: `#2cd6f7` (Cyan)
- **Role ID**: `6666666666666666666`

### Robocord (robocord)

- **User ID**: `882743264564875285`
- **Application ID**: `882743264564875285`
- **Avatar**: `/avatar/robocord.webp`
- **Role Color**: `#9b59b6` (Purple)
- **Role ID**: `2222222222222222222`
- **Bot**: Yes
- **Verified**: Yes

### Dorukyum (dorukyum)

- **User ID**: `543397958197182464`
- **Avatar**: `/avatar/dorukyum.webp`
- **Role Color**: `#2cd6f7` (Cyan)
- **Role ID**: `5555555555555555555`

## Payload Details

### Message Types

- **Type 0**: Default message (regular user message)
- **Type 20**: Application command response (slash command/context menu response)

### Interaction Types (in interaction object)

- **Type 2**: Application Command (Slash Command)
- **Type 3**: Message Component (Context Menu)

### Key Fields

All payloads include:

- **id**: Unique snowflake ID for the message
- **type**: Message type
- **content**: Message text content
- **channel_id**: Channel where message was sent
- **author**: Full user object
- **member**: Member object (when in a guild) with roles array
- **timestamp**: ISO 8601 timestamp
- **interaction**: Interaction object (for slash command responses)
- **components**: Action rows with buttons/select menus (when applicable)
- **embeds**: Embed objects (when applicable)
- **message_reference**: Reference to replied message (for prefixed commands)

### Role Configuration

When a user profile has a `roleColor` set, the member object includes a roles array with a corresponding dummy role ID to represent that color in the Discord UI.

## Usage

These payloads represent what the Discord API would return when receiving these messages. They can be used for:

1. Testing Discord bot message parsers
2. Understanding the Discord API message structure
3. Creating mock data for development
4. Documentation and examples

## Dummy Data

The following IDs are dummy/placeholder values:

- All snowflake IDs (message IDs, user IDs, channel IDs, etc.)
- Avatar hashes
- Guild IDs
- Role IDs

The actual content, structure, and relationships between messages accurately reflect the examples shown in the Pycord Guide.

## Discord API Reference

For the complete Discord message object specification, see:
https://discord.com/developers/docs/resources/message#message-object

## Notes

- Timestamps use ISO 8601 format with UTC timezone
- Color values in embeds are decimal representations of hex colors
- Component custom_ids are unique identifiers for interactive elements
- All webhook_id fields match the bot's application_id (for application command responses)
