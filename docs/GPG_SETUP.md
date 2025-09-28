# GPG Signing Setup for CI/CD

This document explains how to configure GPG signing for the copilot-swe-agent[bot] in the CI/CD pipeline.

## Required GitHub Secrets

You need to configure the following secrets in your GitHub repository settings:

### 1. `GPG_PRIVATE_KEY`

The private GPG key for the bot account in ASCII armored format.

To generate and export:

```bash
# Generate a new GPG key for the bot
gpg --full-generate-key

# Choose:
# - Key type: RSA and RSA (default)
# - Key size: 4096 bits
# - Expiration: 0 (no expiration)
# - Name: copilot-swe-agent[bot]
# - Email: copilot-swe-agent[bot]@users.noreply.github.com

# Export the private key
gpg --armor --export-secret-keys YOUR_KEY_ID
```

Copy the entire output (including `-----BEGIN PGP PRIVATE KEY BLOCK-----` and `-----END PGP PRIVATE KEY BLOCK-----`) and add it as the `GPG_PRIVATE_KEY` secret.

### 2. `GPG_KEY_ID`

The key ID of the GPG key.

To get the key ID:

```bash
# List your GPG keys
gpg --list-secret-keys --keyid-format LONG

# Look for the key ID in the output like:
# sec   rsa4096/ABCD1234EFGH5678 2023-01-01 [SC]
# The key ID is: ABCD1234EFGH5678
```

Add this key ID as the `GPG_KEY_ID` secret.

## Adding the Public Key to GitHub

1. Export the public key:

```bash
gpg --armor --export YOUR_KEY_ID
```

2. Go to GitHub Settings → SSH and GPG keys
3. Click "New GPG key"
4. Paste the public key
5. Save the key

## How It Works

The CI/CD pipeline automatically detects when commits are made by `copilot-swe-agent[bot]` and:

1. Imports the private GPG key
2. Configures Git to use GPG signing
3. Sets the correct user name and email
4. Configures GPG for non-interactive use

All commits made by the bot will be automatically signed and show as "Verified" on GitHub.

## Environment Variables Used

- `GPG_PRIVATE_KEY` - The private GPG key in ASCII armored format
- `GPG_KEY_ID` - The key ID for the GPG key
- `GNUPGHOME` - Set to `/home/runner/.gnupg` for the GPG home directory

## Verification

After setup, bot commits will show as "Verified" in the GitHub commit history with a green checkmark.
