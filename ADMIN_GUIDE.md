# Admin Panel Guide - WYSIWYG Content Editor

## How to Use the Admin Panel

1. **Navigate to Admin Panel**: Go to `http://localhost:5173/admin`

2. **Edit Content**:
   - Click "Edit" button to enable editing mode
   - Select a tab (Hero Section, Featured Project, Site Config, About)
   - Make your changes in the form fields
   - Click "Preview" to see how it looks

3. **Save Your Changes**:
   - Click "Save" to store changes in browser localStorage (temporary)
   - Click "Export JSON" to download your changes as a JSON file
   - Click "Copy TS Code" to copy TypeScript code to clipboard

## Updating content.ts

### Option 1: Using the Update Script (Recommended)

1. Export JSON from admin panel (click "Export JSON")
2. Save the file as `content-export.json` in the project root
3. Run the update script:
   ```bash
   node scripts/update-content.js content-export.json
   ```
4. The script will automatically update `src/content.ts`

### Option 2: Manual Update

1. Click "Copy TS Code" in the admin panel
2. Open `src/content.ts`
3. Find the section you want to update (e.g., `export const heroContent`)
4. Replace it with the copied code
5. Save the file

### Option 3: Direct JSON Import

If you have a JSON file, you can manually convert it to TypeScript format and update content.ts.

## Current Content Status

The admin panel loads content from `src/content.ts` on first visit. Any changes you make are saved to browser localStorage until you export and update the file.
