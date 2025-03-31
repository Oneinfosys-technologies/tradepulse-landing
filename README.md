# Welcome to your Be.fund project

## Project info

**URL**: https://lovable.dev/projects/8097253c-1d50-4c44-8894-841c1f541267

## Deployment Guide for CyberPanel Servers

This guide will help you deploy this React application on a server running CyberPanel.

### Prerequisites

- A server with CyberPanel installed
- Node.js (v16 or higher) and npm installed on the server
- SSH access to your server
- A domain or subdomain pointing to your server

### Step 1: Preparing Your Environment

First, make sure Node.js and npm are installed on your server:

```bash
# Check if Node.js is installed
node -v

# Check if npm is installed
npm -v

# If not installed, you can install on most Linux distributions with:
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Clone the Repository

```bash
# Navigate to a directory where you want to store the project
cd /var/www

# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>
```

### Step 3: Install Dependencies and Build the Project

```bash
# Install dependencies
npm install

# Create an optimized production build
npm run build
```

The build process will create a `dist` folder containing static files that can be served by a web server.

### Step 4: Configure CyberPanel to Serve the Application

1. **Log in to CyberPanel**

2. **Create a new website**:
   - Navigate to "Websites" > "Create Website"
   - Enter your domain name (e.g., yourdomain.com)
   - Select the appropriate package
   - Click "Create Website"

3. **Configure the document root**:
   - Go to "Websites" > "List Websites"
   - Click on your domain name
   - Go to "File Manager"
   - Navigate to the main public_html directory
   - Delete any existing files (if it's a new website)
   - Upload the contents of your project's `dist` folder to this directory

   Alternatively, you can use terminal commands:
   ```bash
   # Replace with your actual paths
   rm -rf /home/yourusername/public_html/*
   cp -r /var/www/your-project-name/dist/* /home/yourusername/public_html/
   ```

4. **Configure the web server**:

   **For Nginx (default in CyberPanel):**
   
   Create a custom Nginx configuration:
   - Go to "Websites" > "List Websites"
   - Click on your domain
   - Go to "Vhost Config"
   - Add the following inside the `server` block:

   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
       expires 1d;
   }
   
   # Cache static assets
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
       expires 30d;
       add_header Cache-Control "public, no-transform";
   }
   ```

   - Click "Save" and the configuration will be applied

### Step 5: Set Up Automatic Deployments (Optional)

For automatic deployments, you can use a simple bash script:

1. Create a deployment script:

```bash
# Create a deploy.sh file in the project root
touch /var/www/your-project-name/deploy.sh
chmod +x /var/www/your-project-name/deploy.sh
```

2. Edit the script with your preferred text editor:

```bash
#!/bin/bash
cd /var/www/your-project-name
git pull
npm install
npm run build
rm -rf /home/yourusername/public_html/*
cp -r /var/www/your-project-name/dist/* /home/yourusername/public_html/
echo "Deployment completed on $(date)"
```

3. Set up a cron job to run this script periodically or trigger it manually when needed.

### Step 6: SSL Configuration

If you want to enable HTTPS (recommended):

1. In CyberPanel:
   - Go to "Websites" > "List Websites"
   - Click on your domain
   - Click "SSL" > "Issue SSL"
   - Select "Let's Encrypt" and follow the prompts

### Troubleshooting

1. **404 Errors on Page Refresh**: If you encounter 404 errors when refreshing or directly accessing routes, make sure your Nginx configuration includes the `try_files` directive as shown above.

2. **Permission Issues**: Ensure that the web server user has read permissions for your files:
   ```bash
   # For typical CyberPanel setups
   sudo chown -R nobody:nobody /home/yourusername/public_html/
   sudo chmod -R 755 /home/yourusername/public_html/
   ```

3. **API Connection Issues**: If your app connects to an API, ensure that CORS is properly configured on your API server.

### Performance Optimization

1. **Enable Gzip Compression**:
   This should be enabled by default in CyberPanel, but verify in the Nginx configuration:
   ```nginx
   gzip on;
   gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   ```

2. **Content Delivery Network (CDN)**:
   Consider using a CDN like Cloudflare to cache and deliver static assets.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8097253c-1d50-4c44-8894-841c1f541267) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project to other platforms?

Simply open [Lovable](https://lovable.dev/projects/8097253c-1d50-4c44-8894-841c1f541267) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
